import Blog from "@/components/Blog";
import { API_URL } from "@/config/index";

export default function Posts() {
  return (
    <div>
      <Blog />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/posts`);
  const events = await res.json();

  return {
    props: { events },
    //revalidate: 1,
  };
}
