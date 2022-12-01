import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import client from "../../lib/sanity";

export default function BlogPost({ post }) {
  return (
    <div className="relative pt-20 bg-white overflow-hidden sm:mt-10 md:pt-10">
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
              src={`${process.env.NEXT_PUBLIC_SANITY_CDN_URL}${post.mainImage.asset._ref}`
                .replace("-jpg", ".jpg")
                .replace("image-", "")}
              alt=""
              priority={true}
              width={1239}
              height={576}
              layout="responsive"
            />
          </div>

          <h1>
            <span className="block mt-12 text-base text-center text-gray-dark font-semibold tracking-wide uppercase"></span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </span>
          </h1>
        </div>
        <div className="grid">
          <div className="grid-1 items-center justify-center">
            <div className="grid mt-10 prose prose-indigo prose-lg text-gray-medium sm:mx-20 lg:mx-80">
              {post.body.map((el, counter) => (
                <>
                  <div className="grid grid-cols-1">
                    <p key={counter}>{el.children[0].text}</p>
                    <br />
                  </div>
                </>
              ))}
            </div>

            <div className="my-10">
              <div className="mt-10 grid grid-cols-1 justify-items-center">
                <a
                  href={post.url}
                  className="text-base font-medium text-blue-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  {post.urlDescription}
                </a>
              </div>
            </div>
            <div className="my-10">
              <div className="mt-10 grid grid-cols-1 justify-items-center">
                <Link href="/posts">
                  <a className="text-base font-medium text-blue-light">
                    {" "}
                    <span aria-hidden="true"> &larr;</span> Back to Posts{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  return {
    props: {
      post,
    },
  };
}
