import { FC, SVGProps } from "react";
import type { SanityDocument, Reference, Slug } from "@sanity/types";
import { PortableTextBlock } from "@portabletext/types";

export type SocialIcon = {
  name: string;
  href: string;
  target: string;
  rel: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export type PostPreview = SanityDocument & {
  title: string;
  excerpt: string;
  mainImage: {
    _type: "image";
    asset: Reference;
  };
  author: string;
  createdAt: string | null;
  slug: Slug;
  dateTime: string | null;
  publishedAt: string;
  readingTime: string;
};

export type Post = PostPreview & {
  urlDescription: string;
  url: string;
  body: PortableTextBlock[];
};

export type Qualification = SanityDocument & {
  name: string;
  description: PortableTextBlock[];
  category: string;
};
