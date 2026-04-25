import { Link, LinkPayload } from '@/types/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000';

async function apiRequest<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
    cache: 'no-store'
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(errorData.message ?? 'Request failed');
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export const linkApi = {
  getAll: () => apiRequest<Link[]>('/api/links'),
  create: (payload: LinkPayload) => apiRequest<Link>('/api/links', { method: 'POST', body: JSON.stringify(payload) }),
  update: (id: string, payload: Partial<LinkPayload>) =>
    apiRequest<Link>(`/api/links/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  remove: (id: string) => apiRequest<void>(`/api/links/${id}`, { method: 'DELETE' })
};

export function buildGoLink(slug: string): string {
  return `${API_URL}/go/${slug}`;
}
