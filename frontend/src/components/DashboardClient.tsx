'use client';

import { useEffect, useMemo, useState } from 'react';
import { api } from '../lib/api';
import { LinkItem, LinkPayload } from '../types';
import { LinkForm } from './LinkForm';
import { LinkCard } from './LinkCard';
import { SearchBar } from './SearchBar';
import { EmptyState } from './EmptyState';

export function DashboardClient() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState<LinkItem | null>(null);

  async function loadLinks(query = '') {
    setLoading(true);
    setError('');

    try {
      const data = await api.getLinks(query);
      setLinks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load links');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLinks();
  }, []);

  async function handleCreate(payload: LinkPayload) {
    await api.createLink(payload);
    await loadLinks(searchValue);
  }

  async function handleUpdate(payload: LinkPayload) {
    if (!editing) return;
    await api.updateLink(editing._id, payload);
    setEditing(null);
    await loadLinks(searchValue);
  }

  async function handleDelete(id: string) {
    await api.deleteLink(id);
    await loadLinks(searchValue);
  }

  const debouncedSearch = useMemo(() => {
    return setTimeout(() => {
      loadLinks(searchValue);
    }, 250);
  }, [searchValue]);

  useEffect(() => {
    return () => clearTimeout(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="space-y-4">
          <SearchBar value={searchValue} onChange={setSearchValue} />

          {loading ? <p className="text-sm text-slate-500">Loading links...</p> : null}
          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          {!loading && links.length === 0 ? <EmptyState /> : null}

          <div className="space-y-3">
            {links.map((link) => (
              <LinkCard key={link._id} item={link} onDelete={handleDelete} onEdit={setEditing} />
            ))}
          </div>
        </section>

        <aside>
          <LinkForm mode="create" onSubmit={handleCreate} />
        </aside>
      </div>

      {editing ? (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg">
            <LinkForm mode="edit" initialValue={editing} onSubmit={handleUpdate} onCancel={() => setEditing(null)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
