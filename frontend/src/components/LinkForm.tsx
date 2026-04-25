'use client';

import { FormEvent, useEffect, useState } from 'react';
import { LinkItem, LinkPayload } from '../types';
import { Button } from './Button';

interface Props {
  mode: 'create' | 'edit';
  initialValue?: LinkItem;
  onSubmit: (payload: LinkPayload) => Promise<void>;
  onCancel?: () => void;
}

export function LinkForm({ mode, initialValue, onSubmit, onCancel }: Props) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [destinationUrl, setDestinationUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!initialValue) return;
    setTitle(initialValue.title ?? '');
    setSlug(initialValue.slug);
    setDestinationUrl(initialValue.destinationUrl);
    setDescription(initialValue.description ?? '');
    setTags(initialValue.tags.join(', '));
  }, [initialValue]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await onSubmit({
        title,
        slug,
        destinationUrl,
        description,
        tags: tags
          .split(',')
          .map((tag) => tag.trim())
          .filter(Boolean)
      });

      if (mode === 'create') {
        setTitle('');
        setSlug('');
        setDestinationUrl('');
        setDescription('');
        setTags('');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save link');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{mode === 'create' ? 'Create GoLink' : 'Edit GoLink'}</h3>

      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      <input value={slug} onChange={(e) => setSlug(e.target.value.toLowerCase())} placeholder="slug (example: docs)" required className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      <input value={destinationUrl} onChange={(e) => setDestinationUrl(e.target.value)} placeholder="https://example.com" required className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description (optional)" className="min-h-20 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="tags separated by commas" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <div className="flex items-center gap-2">
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : mode === 'create' ? 'Create Link' : 'Update Link'}</Button>
        {onCancel ? (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        ) : null}
      </div>
    </form>
  );
}
