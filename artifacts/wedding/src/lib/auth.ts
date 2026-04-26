/**
 * Lightweight client-side admin auth.
 * Used only to gate the admin panel that exports local RSVP data.
 */

import { SITE } from "@/config/site";

const STORAGE_KEY = "admin_session";

export function checkCredentials(username: string, password: string): boolean {
  return (
    username.trim() === SITE.admin.username &&
    password === SITE.admin.password
  );
}

export function login(username: string, password: string): boolean {
  if (!checkCredentials(username, password)) return false;
  sessionStorage.setItem(STORAGE_KEY, "1");
  return true;
}

export function logout(): void {
  sessionStorage.removeItem(STORAGE_KEY);
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(STORAGE_KEY) === "1";
}
