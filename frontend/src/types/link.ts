export interface Link {
  _id: string;
  title: string;
  slug: string;
  destinationUrl: string;
  description?: string;
  tags: string[];
  clicks: number;
  createdAt: string;
  updatedAt: string;
}

export interface LinkPayload {
  title: string;
  slug: string;
  destinationUrl: string;
  description?: string;
  tags: string[];
}
