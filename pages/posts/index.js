import { API_URL } from "@/config/index";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Posts({ posts }) {
  const router = useRouter();
  return (
    <div className="relative bg-white pb-20 px-4 sm:px-6 sm:py-24 lg:pt-32 lg:px-8 lg:pb-">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-dark sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-medium sm:mt-4">
            Just random posts on where you can find me, and what I am working
            on.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-light">
                    <Link href={post.category.href} className="hover:underline">
                      <a>{post.category.name}</a>
                    </Link>
                  </p>
                  <Link
                    href={{
                      pathname: `/posts/${post.slug}`,
                    }}
                  >
                    <a className="block mt-2">
                      <p className="text-xl font-semibold text-gray-dark">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-medium">
                        {post.description}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <Avatar />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-dark">
                      <Link href={post.author.href} className="hover:underline">
                        <a>{post.author.name}</a>
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-medium">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/posts`);
  const allPosts = await res.json();

  return {
    props: { posts: allPosts },
    //revalidate: 1,
  };
}
