'use client';

import { ExternalLink, Copy, Pencil, Trash2 } from 'lucide-react';
import { Link } from '@/types/link';
import { Button } from './ui/Button';
import { buildGoLink } from '@/lib/api';

interface LinkCardProps {
  link: Link;
  onEdit: (link: Link) => void;
  onDelete: (id: string) => Promise<void>;
}

export function LinkCard({ link, onEdit, onDelete }: LinkCardProps) {
  const shortLink = buildGoLink(link.slug);

  async function copyShortLink() {
    await navigator.clipboard.writeText(shortLink);
  }

  return (
    <article className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <h3 className='text-lg font-semibold text-slate-900'>{link.title}</h3>
          <p className='mt-1 text-sm text-slate-500'>/{link.slug}</p>
        </div>
        <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700'>{link.clicks} clicks</span>
      </div>

      <p className='mt-3 line-clamp-2 text-sm text-slate-600'>{link.description || 'No description provided.'}</p>

      <div className='mt-3 flex flex-wrap gap-2'>
        {link.tags.length > 0 ? (
          link.tags.map((tag) => (
            <span key={tag} className='rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700'>
              #{tag}
            </span>
          ))
        ) : (
          <span className='text-xs text-slate-400'>No tags</span>
        )}
      </div>

      <div className='mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600'>
        <p className='break-all'>Short: {shortLink}</p>
        <p className='mt-1 break-all'>Destination: {link.destinationUrl}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        <Button variant='secondary' onClick={copyShortLink}>
          <Copy className='mr-2 h-4 w-4' /> Copy short link
        </Button>
        <a href={link.destinationUrl} target='_blank' rel='noreferrer'>
          <Button variant='ghost'>
            <ExternalLink className='mr-2 h-4 w-4' /> Open destination
          </Button>
        </a>
        <Button variant='ghost' onClick={() => onEdit(link)}>
          <Pencil className='mr-2 h-4 w-4' /> Edit
        </Button>
        <Button variant='danger' onClick={() => onDelete(link._id)}>
          <Trash2 className='mr-2 h-4 w-4' /> Delete
        </Button>
      </div>
    </article>
  );
}
