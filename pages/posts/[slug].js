import Link from "next/link";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

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
      <div className="relative px-4 sm:px-6 lg:px-8 lg:pt-5">
        <Breadcrumb title={post.title} slug={post.slug} />
        <div className="text-lg max-w-prose mx-auto">
          <div className="mt-10">
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
        <div className="grid grid-cols-1 grid-rows-2 justify-items-center place-content-center">
          <div>
            <div className="grid grid-cols-1 place-content-center mt-10 prose prose-indigo prose-lg text-gray-500 w-4/5 mx-10 sm:mx-20 lg:mx-40">
              <p className="justify-self-center">
                Faucibus commodo massa rhoncus, volutpat.{" "}
                <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                praesent donec est. Odio penatibus risus viverra tellus varius
                sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                Dignissim sed eget risus enim.{" "}
                <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis
                id.
              </p>
              <p>
                Quis semper vulputate aliquam venenatis egestas sagittis quisque
                orci. Donec commodo sit viverra aliquam porttitor ultrices
                gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
                justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
                Amet, duis sed elit interdum dignissim.
              </p>
              <h2>From beginner to expert in 30 days</h2>
              <p>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
              <blockquote>
                <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </blockquote>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
              <figure>
                <figcaption>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                </figcaption>
              </figure>
              <h2>Everything you need to get up and running</h2>
              <p>
                Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
                . Amet, massa quam varius orci dapibus volutpat cras. In amet eu
                ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
                viverra ridiculus non molestie. Gravida quis fringilla amet eget
                dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                congue erat ac. Cras fermentum convallis quam.
              </p>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
            <div className="mt-10">
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
