import Link from "next/link";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Avatar from "@/components/Avatar";

export default function BlogPost({ post }) {
  const router = useRouter();
  return (
    <div className="relative pt-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative px-14 mb-10 sm:px-6 sm:mb-20 md:mb-32 lg:px-8 lg:py-5 lg:mb-40">
        <Breadcrumb title={post.title} slug={post.slug} />
        <div className="text-lg max-w-prose mx-auto">
          <div className="pt-24">
            <Image
              className="object-cover rounded-md"
              src={post.imageUrl}
              alt=""
              priority={true}
              width={1239}
              height={576}
              layout="responsive"
            />
          </div>
          <h1>
            <span className="block mt-12 text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"></span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </span>
          </h1>
        </div>
        <div className="flex">
          <div className="flex-1 items-center justify-center">
            <div className="flex mt-10 prose prose-indigo prose-lg text-gray-500 sm:mx-20 lg:mx-80">
              <p>
                Faucibus commodo massa rhoncus, volutpat.{" "}
                <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                praesent donec est. Odio penatibus risus viverra tellus varius
                sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                Dignissim sed eget risus enim.{" "}
                <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis
                id.
              </p>
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

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/posts/${slug}`);
  const posts = await res.json();

  return {
    props: {
      post: posts[0],
    },
  };
}
