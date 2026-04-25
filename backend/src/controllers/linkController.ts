import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { Link } from '../models/Link';
import { AppError } from '../utils/AppError';
import { createLinkSchema, updateLinkSchema } from '../validators/linkValidators';

export async function createLink(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = createLinkSchema.parse(req.body);
    const link = await Link.create({ ...validated, slug: validated.slug.toLowerCase() });
    res.status(201).json(link);
  } catch (error) {
    next(error);
  }
}

export async function getLinks(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const links = await Link.find().sort({ createdAt: -1 });
    res.json(links);
  } catch (error) {
    next(error);
  }
}

export async function getLinkBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const slug = String(req.params.slug).toLowerCase().trim();
    const link = await Link.findOne({ slug });
    if (!link) {
      throw new AppError('Link not found', 404);
    }
    res.json(link);
  } catch (error) {
    next(error);
  }
}

export async function updateLink(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new AppError('Invalid link id', 400);
    }

    const validated = updateLinkSchema.parse(req.body);
    if (validated.slug) {
      validated.slug = validated.slug.toLowerCase();
    }

    const link = await Link.findByIdAndUpdate(req.params.id, validated, {
      new: true,
      runValidators: true
    });

    if (!link) {
      throw new AppError('Link not found', 404);
    }

    res.json(link);
  } catch (error) {
    next(error);
  }
}

export async function deleteLink(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new AppError('Invalid link id', 400);
    }

    const link = await Link.findByIdAndDelete(req.params.id);
    if (!link) {
      throw new AppError('Link not found', 404);
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

export async function goToLink(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const slug = String(req.params.slug).toLowerCase().trim();
    const link = await Link.findOneAndUpdate({ slug }, { $inc: { clicks: 1 } }, { new: true });

    if (!link) {
      throw new AppError('No GoLink found for this slug', 404);
    }

    res.redirect(link.destinationUrl);
  } catch (error) {
    next(error);
  }
}
