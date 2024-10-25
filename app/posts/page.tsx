import client from "@/lib/sanity";
import { PostPreview } from "@/utils/types/types";
import PostsPage from "./posts-page";

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
