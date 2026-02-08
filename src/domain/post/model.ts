import type { Post, PostData } from './typing';

export function toPostData(post: Post): PostData {
  return {
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    date: post.data.date,
    banner: post.data.banner,
  };
}

export function toPostDataList(posts: Post[]): PostData[] {
  return posts.map(toPostData);
}

export function sortByDateDesc(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });
}
