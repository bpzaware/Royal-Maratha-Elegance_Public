import { readJSON, writeJSON } from "@/lib/siteStorage";

export interface RsvpResponse {
  guestId?: string;
  name: string;
  side?: string;
  attending: boolean;
  plusOne?: boolean;
  dietaryNotes?: string;
  message?: string;
  timestamp: string;
}

const RSVP_KEY = "rsvp_responses";

export function getRsvpResponses(): RsvpResponse[] {
  return readJSON<RsvpResponse[]>(RSVP_KEY, []);
}

export function saveRsvpResponse(input: Omit<RsvpResponse, "timestamp">): RsvpResponse {
  const response: RsvpResponse = {
    ...input,
    timestamp: new Date().toISOString(),
  };
  const responses = [response, ...getRsvpResponses()];
  writeJSON(RSVP_KEY, responses);
  return response;
}

export function clearRsvpResponses(): void {
  writeJSON<RsvpResponse[]>(RSVP_KEY, []);
}
