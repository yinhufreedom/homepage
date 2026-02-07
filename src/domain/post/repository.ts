import { getCollection } from 'astro:content';
import type { Post, PostData, PaginationResult } from './typing';
import { toPostDataList, sortByDateDesc } from './model';

export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return sortByDateDesc(posts);
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getCollection('posts');
  return posts.find(post => post.slug === slug);
}

export async function getPaginatedPosts(page: number, perPage: number): Promise<PaginationResult> {
  const allPosts = await getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / perPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const pagePosts = allPosts.slice(startIndex, endIndex);

  return {
    posts: toPostDataList(pagePosts),
    currentPage: page,
    totalPages,
    totalPosts,
  };
}

export async function getAllPostsData(): Promise<PostData[]> {
  const posts = await getAllPosts();
  return toPostDataList(posts);
}
