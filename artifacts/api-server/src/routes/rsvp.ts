import { Router, type IRouter } from "express";
import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const router: IRouter = Router();

const RSVP_STORAGE_KEY = "rsvp_responses";

interface RsvpRecord {
  guestId?: string;
  name: string;
  side?: string;
  attending: boolean;
  plusOne?: boolean;
  dietaryNotes?: string;
  message?: string;
  timestamp: string;
}

const DATA_DIR = path.resolve(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "rsvp_responses.json");

function validatePayload(body: unknown) {
  if (!body || typeof body !== "object") return null;
  const data = body as Record<string, unknown>;
  if (typeof data.name !== "string" || data.name.trim().length === 0) return null;
  if (typeof data.attending !== "boolean") return null;
  return {
    guestId: typeof data.guestId === "string" ? data.guestId : undefined,
    name: data.name.trim(),
    side: typeof data.side === "string" ? data.side : undefined,
    attending: data.attending,
    plusOne: typeof data.plusOne === "boolean" ? data.plusOne : undefined,
    dietaryNotes: typeof data.dietaryNotes === "string" ? data.dietaryNotes : undefined,
    message: typeof data.message === "string" ? data.message : undefined,
  } satisfies Omit<RsvpRecord, "timestamp">;
}

async function ensureDataFile() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
  if (!existsSync(DATA_FILE)) {
    await writeFile(DATA_FILE, "[]", "utf8");
  }
}

async function readResponses(): Promise<RsvpRecord[]> {
  try {
    await ensureDataFile();
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeResponses(responses: RsvpRecord[]) {
  await ensureDataFile();
  await writeFile(DATA_FILE, JSON.stringify(responses, null, 2), "utf8");
}

router.get("/rsvps", async (_req, res) => {
  res.json({ responses: await readResponses() });
});

router.post("/rsvps", async (req, res) => {
  const payload = validatePayload(req.body);
  if (!payload) {
    res.status(400).json({ error: "Invalid RSVP payload" });
    return;
  }

  const response: RsvpRecord = {
    ...payload,
    timestamp: new Date().toISOString(),
  };

  const responses = [response, ...(await readResponses())];
  await writeResponses(responses);

  res.status(201).json({ response });
});

router.delete("/rsvps", async (_req, res) => {
  await writeResponses([]);
  res.status(204).send();
});

export default router;
