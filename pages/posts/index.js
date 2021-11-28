import Blog from "@/components/Blog";
import { API_URL } from "@/config/index";

export default function Posts() {
  return (
    <div>
      <Blog />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/posts`);
  const posts = await res.json();

  return {
    props: { posts },
    //revalidate: 1,
  };
}
