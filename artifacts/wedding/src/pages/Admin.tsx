import { useEffect, useMemo, useState } from "react";
import { Download, LogOut, RefreshCcw, Trash2, ShieldCheck } from "lucide-react";

import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isAuthenticated, login, logout } from "@/lib/auth";
import { downloadCSV, toCSV } from "@/lib/csv";
import { getRsvpResponses, clearRsvpResponses, type RsvpResponse } from "@/lib/rsvp-store";

export default function Admin() {
  useDocumentMeta(
    "Admin",
    "Private RSVP review and export panel for the couple."
  );

  const [authed, setAuthed] = useState<boolean>(() => isAuthenticated());

  if (!authed) {
    return <LoginScreen onSuccess={() => setAuthed(true)} />;
  }
  return <AdminDashboard onLogout={() => setAuthed(false)} />;
}

function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      setError("");
      onSuccess();
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-md">
        <SectionHeading
          eyebrow="Private Area"
          showOrnament={false}
          subtitle="For Sanket and Bhagyashree only — sign in to view RSVPs."
        >
          Admin Sign In
        </SectionHeading>

        <GlassCard className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="username" className="font-display tracking-[0.16em] uppercase text-xs text-secondary mb-2 block">
                Username
              </Label>
              <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-white border-primary/30 h-11 focus-visible:ring-primary" autoComplete="username" autoFocus />
            </div>
            <div>
              <Label htmlFor="password" className="font-display tracking-[0.16em] uppercase text-xs text-secondary mb-2 block">
                Password
              </Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white border-primary/30 h-11 focus-visible:ring-primary" autoComplete="current-password" />
            </div>

            {error && <p className="text-sm text-destructive text-center">{error}</p>}

            <GoldButton type="submit" className="w-full">Enter</GoldButton>
          </form>
        </GlassCard>
      </div>
    </PageTransition>
  );
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [responses, setResponses] = useState<RsvpResponse[]>([]);

  const refresh = () => {
    setResponses(getRsvpResponses());
  };

  useEffect(() => {
    refresh();
  }, []);

  const stats = useMemo(() => {
    const total = responses.length;
    const attending = responses.filter((r) => r.attending).length;
    const declining = total - attending;
    const plusOnes = responses.filter((r) => r.plusOne).length;
    const headcount = attending + plusOnes;
    return { total, attending, declining, plusOnes, headcount };
  }, [responses]);

  const handleExport = () => {
    if (responses.length === 0) return;
    const rows = responses.map((r) => ({
      timestamp: r.timestamp ?? "",
      name: r.name ?? "",
      side: r.side ?? "",
      attending: r.attending ? "Yes" : "No",
      plusOne: r.plusOne ? "Yes" : "No",
      dietaryNotes: r.dietaryNotes ?? "",
      message: r.message ?? "",
    }));
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    downloadCSV(`rsvp-responses-${stamp}.csv`, toCSV(rows));
  };

  const handleClear = () => {
    const ok = window.confirm("Permanently delete all RSVP responses stored on this device? This cannot be undone.");
    if (!ok) return;
    clearRsvpResponses();
    refresh();
  };

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow mb-2">Private Dashboard</p>
            <h1 className="font-display text-3xl md:text-4xl text-saffron-gradient">RSVP Responses</h1>
            <p className="text-foreground/65 mt-2 max-w-xl">Responses are saved locally in the browser so the whole site can be exported as one file. Use Export to download them as a spreadsheet.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={refresh} className="px-4 py-2 rounded-full border border-primary/35 text-primary hover:bg-primary/10 transition-colors text-sm flex items-center gap-2">
              <RefreshCcw className="w-4 h-4" /> Refresh
            </button>
            <button onClick={handleClear} className="px-4 py-2 rounded-full border border-destructive/40 text-destructive hover:bg-destructive/10 transition-colors text-sm flex items-center gap-2">
              <Trash2 className="w-4 h-4" /> Clear All
            </button>
            <button onClick={handleLogout} className="px-4 py-2 rounded-full border border-foreground/25 text-foreground/70 hover:bg-foreground/5 transition-colors text-sm flex items-center gap-2">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          <Stat label="Responses" value={stats.total} />
          <Stat label="Attending" value={stats.attending} accent />
          <Stat label="Declining" value={stats.declining} />
          <Stat label="+1s" value={stats.plusOnes} />
          <Stat label="Headcount" value={stats.headcount} accent />
        </div>

        <GlassCard className="p-0 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-primary/15 bg-primary/5">
            <h2 className="font-display tracking-[0.14em] uppercase text-sm text-secondary">All Submissions</h2>
            <GoldButton onClick={handleExport} disabled={responses.length === 0}>
              <Download className="w-4 h-4 mr-2 inline-block" /> Export CSV
            </GoldButton>
          </div>

          {responses.length === 0 ? (
            <div className="p-12 text-center text-foreground/60">No responses yet. As guests RSVP from any device, they will appear here.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/60 text-secondary text-xs uppercase tracking-wider">
                  <tr>
                    <Th>Date</Th>
                    <Th>Name</Th>
                    <Th>Side</Th>
                    <Th>Attending</Th>
                    <Th>+1</Th>
                    <Th>Dietary</Th>
                    <Th>Message</Th>
                  </tr>
                </thead>
                <tbody>
                  {[...responses].reverse().map((r, i) => (
                    <tr key={`${r.timestamp}-${i}`} className="border-b border-primary/10 hover:bg-primary/5">
                      <Td className="whitespace-nowrap text-foreground/70">{r.timestamp ? new Date(r.timestamp).toLocaleString() : "—"}</Td>
                      <Td className="font-medium">{r.name ?? "—"}</Td>
                      <Td className="capitalize">{r.side ?? "—"}</Td>
                      <Td>{r.attending ? <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">Yes</span> : <span className="px-2 py-0.5 text-xs rounded-full bg-secondary/15 text-secondary">No</span>}</Td>
                      <Td>{r.plusOne ? "Yes" : "—"}</Td>
                      <Td className="max-w-xs truncate" title={r.dietaryNotes}>{r.dietaryNotes || "—"}</Td>
                      <Td className="max-w-xs truncate" title={r.message}>{r.message || "—"}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </GlassCard>
      </div>
    </PageTransition>
  );
}

function Stat({ label, value, accent = false }: { label: string; value: number; accent?: boolean; }) {
  return (
    <GlassCard className={`text-center py-5 ${accent ? "ring-1 ring-primary/30" : ""}`}>
      <div className={`font-display text-3xl font-bold ${accent ? "text-saffron-gradient" : "text-secondary"}`}>{value}</div>
      <div className="text-[10px] font-display tracking-[0.22em] uppercase text-foreground/55 mt-2">{label}</div>
    </GlassCard>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left px-4 py-3 font-display">{children}</th>;
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string; }) {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>;
}
