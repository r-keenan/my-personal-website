"use client";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import Image from "next/legacy/image";
import { formatBlogDate, formatImageUrl } from "@utils/UtilityFunctions";
import { PostPreview } from "@/utils/types/types";
import { useRouter } from "next/navigation";
import { MonthFormat } from "@/utils/enums/enums";

export default function PostsPage({ posts }: { posts: PostPreview[] }) {
  const router = useRouter();

  const handleMouseEnter = (url: string) => {
    // Prefetch URL on Mouser enter
    router.prefetch(url);
  };

  const handleNavigation = (slug: string) => {
    router.push(`/posts/${slug}`);
  };

  return (
    <div className="relative bg-white pb-20 px-4 sm:px-6 sm:py-24 lg:pt-12 lg:px-8 lg:pb-">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto pt-24">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-dark sm:text-4xl">
            From the Blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-medium sm:mt-4">
            Just random posts on where you can find me, and what I am working
            on.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post: PostPreview) => (
            <div
              key={post._id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <Link
                  href={`/post/${post.slug.current}`}
                  passHref
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(post.slug.current);
                  }}
                  onMouseEnter={() =>
                    handleMouseEnter(`/posts/${post.slug.current}`)
                  }
                >
                  <Image
                    className="object-cover"
                    src={formatImageUrl(post.mainImage.asset._ref)}
                    alt="BlogPhoto"
                    width={413}
                    height={192}
                    priority
                  />
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-light">
                    <Link href={"#"} className="hover:underline" passHref>
                      <span>Article</span>
                    </Link>
                  </p>
                  <Link
                    href={`/posts/${post.slug.current}`}
                    className="block mt-2"
                    passHref
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(post.slug.current);
                    }}
                    onMouseEnter={() =>
                      handleMouseEnter(`/posts/${post.slug.current}`)
                    }
                  >
                    <p className="text-xl font-semibold text-gray-dark">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-medium">
                      {post.excerpt}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Link
                      href={"/about-me"}
                      onMouseEnter={() => handleMouseEnter("/about-me")}
                      passHref
                    >
                      <span className="sr-only">{post.author}</span>
                      <Avatar />
                    </Link>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-dark">
                      <Link
                        href={"/about-me"}
                        className="hover:underline"
                        onMouseEnter={() => handleMouseEnter("/about-me")}
                        passHref
                      >
                        {post.author}
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-medium">
                      <time dateTime={post.datetime?.toString()}>
                        {formatBlogDate(
                          post.publishedAt,
                          MonthFormat.ABBREVIATED_MONTH,
                        )}
                      </time>
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
