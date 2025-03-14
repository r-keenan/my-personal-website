"use client";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/legacy/image";
import React from "react";
import { formatBlogDate, formatImageUrl } from "utils/UtilityFunctions";
import { Post } from "@/utils/types/types";
import { PortableTextBlock } from "@portabletext/types";
import { MonthFormat } from "@/utils/enums/enums";
import { useRouter } from "next/navigation";

export default function PostPage({ post }: { post: Post }) {
  const router = useRouter();

  const handleMouseEnter = (url: string) => {
    // Prefetch URL on Mouser enter
    router.prefetch(url);
  };

  return (
    <div className="min-h-screen relative pt-20 bg-white overflow-hidden sm:mt-10 md:pt-10">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative px-14 mb-10 sm:px-6 sm:mb-20 md:mb-32 lg:px-8 lg:py-5 lg:mb-40">
        <Breadcrumb
          title={post.title}
          slug={post.slug.current}
          router={router}
        />

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
            <div className="grid mt-10 prose prose-indigo prose-lg text-gray-medium sm:mx-20 lg:mx-80 2xl:mx-auto 2xl:w-1/3 ">
              {post.body.map((el: PortableTextBlock) => (
                <React.Fragment key={el._key}>
                  <div className="grid grid-cols-1 w-100">
                    <div className="w-100">{el.children[0].text}</div>
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
                  href={"/posts"}
                  className="text-base font-medium text-blue-light"
                  onMouseEnter={() => handleMouseEnter("/posts")}
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
