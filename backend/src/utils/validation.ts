import { LinkInput } from '../types/link';

function isValidUrl(value: string): boolean {
  try {
    // URL constructor throws when the value is not a valid absolute URL.
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export function normalizeTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) {
    return [];
  }

  return tags
    .filter((tag): tag is string => typeof tag === 'string')
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean);
}

export function validateLinkPayload(payload: Partial<LinkInput>): string[] {
  const errors: string[] = [];

  if (!payload.slug || payload.slug.trim() === '') {
    errors.push('slug is required');
  }

  if (!payload.destinationUrl || payload.destinationUrl.trim() === '') {
    errors.push('destinationUrl is required');
  } else if (!isValidUrl(payload.destinationUrl)) {
    errors.push('destinationUrl must be a valid URL');
  }

  return errors;
}
