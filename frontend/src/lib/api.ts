const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1';

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const p = path.startsWith('/') ? path : `/${path}`;
  const res = await fetch(`${API_BASE_URL}${p}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) }
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json() as Promise<T>;
}
