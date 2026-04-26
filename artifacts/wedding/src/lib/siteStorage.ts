const PREFIX = "wedding_site";

function key(name: string) {
  return `${PREFIX}:${name}`;
}

export function readJSON<T>(name: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key(name));
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJSON<T>(name: string, value: T): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key(name), JSON.stringify(value));
}

export function removeItem(name: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(key(name));
}
