import type { CollectionEntry } from 'astro:content';

export function sortPosts(posts: CollectionEntry<'blog'>[]) {
  return posts.filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}

export function slugifyTag(tag: string) {
  return tag.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-').replace(/^-|-$/g, '');
}
