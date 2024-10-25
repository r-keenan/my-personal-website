import client from "@/lib/sanity";
import PostPage from "./post-page";
import { Post } from "@/utils/types/types";

async function getPost({ params }: { params: { slug?: string } }) {
  const { slug = "" } = params;
  const post: Post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug },
  );
  return post;
}
export default async function Page({ params }: { params: { slug?: string } }) {
  const post: Post = await getPost({ params });
  return <PostPage post={post} />;
}
