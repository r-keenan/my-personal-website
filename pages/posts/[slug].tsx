import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/legacy/image";
import Avatar from "@/components/Avatar";
import client from "../../lib/sanity";
import React from "react";
import { formatBlogDate, formatImageUrl } from "utils/UtilityFunctions";
import { notFound } from "next/navigation";
import { oneDay } from "utils/Constants";
import { Post } from "@/utils/types/types";
import { PortableTextBlock } from "@portabletext/types";
import { MonthFormat } from "@/utils/enums/enums";

export default function BlogPost({ post }: { post: Post }) {
  return (
    <div className="min-h-screen relative pt-20 bg-white overflow-hidden sm:mt-10 md:pt-10">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative px-14 mb-10 sm:px-6 sm:mb-20 md:mb-32 lg:px-8 lg:py-5 lg:mb-40">
        <Breadcrumb title={post.title} slug={post.slug.current} />

        <div className="text-lg max-w-prose mx-auto">
          <div className="pt-24">
            <Image
              className="object-cover rounded-md"
              src={formatImageUrl(post.mainImage.asset._ref)}
              alt=""
              width={1239}
              height={576}
              priority
            />
          </div>

          <h1>
            <span className="block mt-12 text-base text-center text-gray-dark font-semibold tracking-wide uppercase"></span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </span>
          </h1>
          <p className="mt-5 text-2xl text-gray-medium text-center">
            {post.excerpt}
          </p>
          <div className="pt-3 text-center text-xl text-gray-medium">
            <time dateTime={post.datetime?.toString()}>
              {formatBlogDate(post.publishedAt, MonthFormat.FULL_MONTH)}
            </time>
          </div>
        </div>
        <div className="grid">
          <div className="grid-1 items-center justify-center">
            <div className="grid mt-10 prose prose-indigo prose-lg text-gray-medium sm:mx-20 lg:mx-80">
              {post.body.map((el: PortableTextBlock) => (
                <React.Fragment key={el._key}>
                  <div className="grid grid-cols-1">
                    <div>{el.children[0].text}</div>
                    <br />
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="my-10">
              <div className="mt-10 grid grid-cols-1 justify-items-center">
                <a
                  href={post.url?.toString()}
                  className="text-base font-medium text-blue-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  {post.urlDescription}
                </a>
              </div>
            </div>
            <div className="my-1">
              <div className="grid grid-cols-1 justify-items-center">
                <Link
                  href="/posts"
                  className="text-base font-medium text-blue-light"
                  passHref
                >
                  <span aria-hidden="true"> &larr;</span> Back to Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch all post slugs
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({
  params,
}: {
  params: { slug?: string };
}) {
  const { slug = "" } = params;
  const post: Post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
    revalidate: oneDay,
  };
}
