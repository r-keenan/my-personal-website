import { FC, SVGProps } from "react";
import type {
  SanityDocument,
  Reference,
  Slug,
  ImageAsset,
} from "@sanity/types";
import Qualifications from "../../components/Qualifications";

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

export type Post = {};

export type Qualifications = {};
