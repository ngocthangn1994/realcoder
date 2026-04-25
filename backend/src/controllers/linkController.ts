import { Request, Response, NextFunction } from 'express';
import { Link } from '../models/Link';
import { normalizeTags, validateLinkPayload } from '../utils/validation';

export async function createLink(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const errors = validateLinkPayload(req.body);

    if (errors.length > 0) {
      res.status(400).json({ success: false, errors });
      return;
    }

    const link = await Link.create({
      title: req.body.title?.trim() || req.body.slug.trim(),
      slug: req.body.slug.trim().toLowerCase(),
      destinationUrl: req.body.destinationUrl.trim(),
      description: req.body.description?.trim() || '',
      tags: normalizeTags(req.body.tags)
    });

    console.log(`[links] Created slug=${link.slug}`);

    res.status(201).json({ success: true, data: link });
  } catch (error) {
    next(error);
  }
}

export async function getLinks(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const q = typeof req.query.q === 'string' ? req.query.q.trim().toLowerCase() : '';

    const filter = q
      ? {
          $or: [
            { title: { $regex: q, $options: 'i' } },
            { slug: { $regex: q, $options: 'i' } },
            { tags: { $elemMatch: { $regex: q, $options: 'i' } } }
          ]
        }
      : {};

    const links = await Link.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: links });
  } catch (error) {
    next(error);
  }
}

export async function getLinkBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const slug = String(req.params.slug).trim().toLowerCase();
    const link = await Link.findOne({ slug });

    if (!link) {
      res.status(404).json({ success: false, message: 'Link not found' });
      return;
    }

    res.json({ success: true, data: link });
  } catch (error) {
    next(error);
  }
}

export async function updateLink(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const errors = validateLinkPayload(req.body);

    if (errors.length > 0) {
      res.status(400).json({ success: false, errors });
      return;
    }

    const link = await Link.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title?.trim() || req.body.slug.trim(),
        slug: req.body.slug.trim().toLowerCase(),
        destinationUrl: req.body.destinationUrl.trim(),
        description: req.body.description?.trim() || '',
        tags: normalizeTags(req.body.tags)
      },
      { new: true, runValidators: true }
    );

    if (!link) {
      res.status(404).json({ success: false, message: 'Link not found' });
      return;
    }

    console.log(`[links] Updated id=${link.id}`);

    res.json({ success: true, data: link });
  } catch (error) {
    next(error);
  }
}

export async function deleteLink(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const link = await Link.findByIdAndDelete(req.params.id);

    if (!link) {
      res.status(404).json({ success: false, message: 'Link not found' });
      return;
    }

    console.log(`[links] Deleted id=${link.id}`);

    res.json({ success: true, message: 'Link deleted' });
  } catch (error) {
    next(error);
  }
}

export async function redirectToDestination(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const slug = String(req.params.slug).trim().toLowerCase();

    const link = await Link.findOneAndUpdate({ slug }, { $inc: { clicks: 1 } }, { new: true });

    if (!link) {
      res.status(404).json({ success: false, message: 'GoLink not found' });
      return;
    }

    console.log(`[redirect] slug=${slug} -> ${link.destinationUrl}`);

    res.redirect(link.destinationUrl);
  } catch (error) {
    next(error);
  }
}
