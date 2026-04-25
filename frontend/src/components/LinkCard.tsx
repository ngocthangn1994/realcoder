'use client';

import { ExternalLink, Copy, Pencil, Trash2, MousePointerClick } from 'lucide-react';
import { LinkItem } from '../types';
import { Button } from './Button';
import { getShortLink } from '../lib/api';

interface Props {
  item: LinkItem;
  onDelete: (id: string) => Promise<void>;
  onEdit: (item: LinkItem) => void;
}

export function LinkCard({ item, onDelete, onEdit }: Props) {
  const shortLink = getShortLink(item.slug);

  async function handleCopy() {
    await navigator.clipboard.writeText(shortLink);
  }

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-900">{item.title || item.slug}</h3>
          <p className="text-sm text-slate-500">go/{item.slug}</p>
          <p className="mt-2 break-all text-sm text-slate-600">{item.destinationUrl}</p>
          {item.description ? <p className="mt-2 text-sm text-slate-500">{item.description}</p> : null}
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-sm text-slate-700">
          <MousePointerClick size={14} /> {item.clicks}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="secondary" onClick={handleCopy} className="inline-flex items-center gap-2"><Copy size={14} />Copy</Button>
        <a href={shortLink} target="_blank" rel="noreferrer">
          <Button variant="ghost" className="inline-flex items-center gap-2"><ExternalLink size={14} />Open</Button>
        </a>
        <Button variant="ghost" onClick={() => onEdit(item)} className="inline-flex items-center gap-2"><Pencil size={14} />Edit</Button>
        <Button variant="danger" onClick={() => onDelete(item._id)} className="inline-flex items-center gap-2"><Trash2 size={14} />Delete</Button>
      </div>
    </article>
  );
}
