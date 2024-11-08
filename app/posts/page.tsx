import client from "@/lib/sanity";
import { PostPreview } from "@/utils/types/types";
import PostsPage from "./posts-page";

// This will not allow me to use a constant from utils. It throws an error that the value must be statically analyzable
// 86400 = seconds in a day
export const revalidate = 86_400;

async function getPosts() {
  const postsPreviewQuery = `*[_type == "post" && !(_id in path('drafts.**'))] {
  slug, title, excerpt, dateTime, publishedAt, readingTime,  "author": author->name, mainImage, _id, createdAt
} | order(publishedAt desc)`;
  const posts: PostPreview[] = await client.fetch(postsPreviewQuery);
  return posts;
}

export default async function Page() {
  const posts = await getPosts();
  return <PostsPage posts={posts} />;
}
