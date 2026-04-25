'use client';

import { useEffect, useState } from 'react';
import { Link, LinkPayload } from '@/types/link';
import { Button } from './ui/Button';

interface LinkFormProps {
  initial?: Link | null;
  onSubmit: (payload: LinkPayload) => Promise<void>;
  onCancel?: () => void;
}

const emptyForm: LinkPayload = {
  title: '',
  slug: '',
  destinationUrl: '',
  description: '',
  tags: []
};

export function LinkForm({ initial, onSubmit, onCancel }: LinkFormProps) {
  const [form, setForm] = useState<LinkPayload>(emptyForm);
  const [tagsText, setTagsText] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (initial) {
      setForm({
        title: initial.title,
        slug: initial.slug,
        destinationUrl: initial.destinationUrl,
        description: initial.description ?? '',
        tags: initial.tags
      });
      setTagsText(initial.tags.join(', '));
      return;
    }
    setForm(emptyForm);
    setTagsText('');
  }, [initial]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);

    try {
      await onSubmit({
        ...form,
        slug: form.slug.trim().toLowerCase(),
        tags: tagsText
          .split(',')
          .map((tag) => tag.trim().toLowerCase())
          .filter(Boolean)
      });
      if (!initial) {
        setForm(emptyForm);
        setTagsText('');
      }
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
      <h2 className='text-lg font-semibold text-slate-900'>{initial ? 'Edit GoLink' : 'Create a new GoLink'}</h2>

      <div>
        <label className='mb-1 block text-sm font-medium text-slate-700'>Title</label>
        <input
          required
          value={form.title}
          onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
          className='w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300'
        />
      </div>

      <div>
        <label className='mb-1 block text-sm font-medium text-slate-700'>Slug</label>
        <input
          required
          value={form.slug}
          onChange={(event) => setForm((prev) => ({ ...prev, slug: event.target.value }))}
          placeholder='sam'
          className='w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300'
        />
      </div>

      <div>
        <label className='mb-1 block text-sm font-medium text-slate-700'>Destination URL</label>
        <input
          required
          type='url'
          value={form.destinationUrl}
          onChange={(event) => setForm((prev) => ({ ...prev, destinationUrl: event.target.value }))}
          placeholder='https://example.com'
          className='w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300'
        />
      </div>

      <div>
        <label className='mb-1 block text-sm font-medium text-slate-700'>Description (optional)</label>
        <textarea
          value={form.description}
          onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
          className='w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300'
          rows={3}
        />
      </div>

      <div>
        <label className='mb-1 block text-sm font-medium text-slate-700'>Tags (comma-separated)</label>
        <input
          value={tagsText}
          onChange={(event) => setTagsText(event.target.value)}
          placeholder='team, docs, hr'
          className='w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300'
        />
      </div>

      <div className='flex gap-3'>
        <Button type='submit' disabled={isSaving}>
          {isSaving ? 'Saving...' : initial ? 'Save changes' : 'Create GoLink'}
        </Button>
        {initial && onCancel ? (
          <Button type='button' variant='secondary' onClick={onCancel}>
            Cancel
          </Button>
        ) : null}
      </div>
    </form>
  );
}
