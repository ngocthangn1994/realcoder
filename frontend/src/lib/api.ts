import { LinkItem, LinkPayload } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {})
    },
    cache: 'no-store'
  });

  const payload = (await response.json()) as ApiResponse<T>;

  if (!response.ok || !payload.success) {
    const message = payload.message ?? payload.errors?.join(', ') ?? 'Request failed';
    throw new Error(message);
  }

  return payload.data;
}

export const api = {
  getLinks: (query = '') => request<LinkItem[]>(`/api/links${query ? `?q=${encodeURIComponent(query)}` : ''}`),
  createLink: (data: LinkPayload) =>
    request<LinkItem>('/api/links', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
  updateLink: (id: string, data: LinkPayload) =>
    request<LinkItem>(`/api/links/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),
  deleteLink: (id: string) =>
    request<{ message: string }>(`/api/links/${id}`, {
      method: 'DELETE'
    })
};

export function getShortLink(slug: string): string {
  return `${API_BASE_URL}/go/${slug}`;
}
