'use client';

import { useEffect, useMemo, useState } from 'react';
import { Link as LinkType, LinkPayload } from '@/types/link';
import { linkApi } from '@/lib/api';
import { LinkForm } from '@/components/LinkForm';
import { LinkCard } from '@/components/LinkCard';
import { SearchBar } from '@/components/SearchBar';
import { EmptyState } from '@/components/EmptyState';

export default function DashboardPage() {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingLink, setEditingLink] = useState<LinkType | null>(null);

  async function loadLinks() {
    setIsLoading(true);
    setError(null);
    try {
      const data = await linkApi.getAll();
      setLinks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load links');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadLinks();
  }, []);

  async function handleCreate(payload: LinkPayload) {
    setError(null);
    try {
      await linkApi.create(payload);
      await loadLinks();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Create failed');
    }
  }

  async function handleUpdate(payload: LinkPayload) {
    if (!editingLink) return;
    setError(null);
    try {
      await linkApi.update(editingLink._id, payload);
      setEditingLink(null);
      await loadLinks();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Update failed');
    }
  }

  async function handleDelete(id: string) {
    setError(null);
    try {
      await linkApi.remove(id);
      await loadLinks();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    }
  }

  const filteredLinks = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return links;

    return links.filter((link) => {
      const fields = [link.title, link.slug, ...link.tags].join(' ').toLowerCase();
      return fields.includes(query);
    });
  }, [links, search]);

  return (
    <main className='mx-auto max-w-6xl px-6 py-10'>
      <div className='mb-6 rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-800'>
        Set Chrome shortcut URL to <strong>http://localhost:5000/go/%s</strong>
      </div>

      {error ? <p className='mb-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700'>{error}</p> : null}

      <div className='grid gap-6 lg:grid-cols-2'>
        <LinkForm onSubmit={handleCreate} />
        {editingLink ? <LinkForm initial={editingLink} onSubmit={handleUpdate} onCancel={() => setEditingLink(null)} /> : null}
      </div>

      <section className='mt-8 space-y-4'>
        <SearchBar value={search} onChange={setSearch} />

        {isLoading ? <p className='text-sm text-slate-500'>Loading links...</p> : null}

        {!isLoading && filteredLinks.length === 0 ? (
          <EmptyState title='No GoLinks found' description='Create your first GoLink or try a different search query.' />
        ) : null}

        <div className='grid gap-4'>
          {filteredLinks.map((link) => (
            <LinkCard key={link._id} link={link} onEdit={setEditingLink} onDelete={handleDelete} />
          ))}
        </div>
      </section>
    </main>
  );
}
