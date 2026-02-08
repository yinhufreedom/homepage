import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export interface PostData {
  slug: string;
  title: string;
  description: string;
  date: Date;
  banner?: string | null;
}

export interface PaginationResult {
  posts: PostData[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}
