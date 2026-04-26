import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { MusicToggle } from "@/components/MusicToggle";

import Home from "@/pages/Home";
import RSVP from "@/pages/RSVP";
import Rituals from "@/pages/Rituals";
import Venue from "@/pages/Venue";
import Gallery from "@/pages/Gallery";
import IncredibleIndia from "@/pages/IncredibleIndia";
import FAQs from "@/pages/FAQs";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/rsvp" component={RSVP} />
        <Route path="/rituals" component={Rituals} />
        <Route path="/venue" component={Venue} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/incredible-india" component={IncredibleIndia} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ParticleField />
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <MusicToggle />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
