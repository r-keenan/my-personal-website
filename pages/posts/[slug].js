import Link from "next/link";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const posts = [
  {
    title: "Find Me on LinkedIn",
    slug: "find-me-on-linkedin",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "Connect with me on LinkedIn!",
    date: "Nov 1, 2021",
    datetime: "2021-11-17",
    imageUrl:
      "https://images.unsplash.com/photo-1585288766827-c62e98d70191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    readingTime: "4 min",
    author: {
      name: "Ross Keenan",
      href: "/about_me",
    },
  },
  {
    title: "Find Me on Upwork",
    slug: "find-me-on-upwork",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Here is my Upwork profile if you want to hire me for freelancing or consulting.",
    date: "Nov 1, 2021",
    datetime: "2021-11-16",
    imageUrl:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1625&q=80",
    readingTime: "4 min",
    author: {
      name: "Ross Keenan",
      href: "/about_me",
    },
  },
  {
    title: "Checkout My GitHub",
    slug: "checkout-my-github",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Here is my GitHub. Please check it out to get the most update to information for what I am currently working on.",
    date: "Nov 1, 2021",
    datetime: "2021-11-15",
    imageUrl:
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    readingTime: "4 min",
    author: {
      name: "Ross Keenan",
      href: "/about_me",
    },
  },
  {
    title: "Welcome to My New Website",
    slug: "welcome-to-my-new-website",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "Built with Next.js, Tailwind CSS, and Tailwind UI.",
    date: "Oct 31, 2021",
    datetime: "2021-11-14",
    imageUrl:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    readingTime: "6 min",
    author: {
      name: "Ross Keenan",
      href: "/about_me",
    },
  },
];

export default function BlogPost({ urlSlug }) {
  //console.log(slug);
  //const propsSlug = slug;
  const slugArr = urlSlug.split("/posts/");
  //console.log(slugArr[0]);
  const post = Object.assign(
    {},
    posts.filter((pst) => pst.slug === slugArr[0])
  );
  console.log(post);
  const { title, imageUrl, slug, postBody } = post[0];
  console.log(title);
  //console.log(post.title);
  //const router = useRouter();
  //console.log(slug);
  return (
    <div className="relative pt-20 bg-white overflow-hidden sm:mt-10 md:pt-10">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative px-14 mb-10 sm:px-6 sm:mb-20 md:mb-32 lg:px-8 lg:py-5 lg:mb-40">
        <Breadcrumb title={title} slug={slug} />
        <div className="text-lg max-w-prose mx-auto">
          <div className="pt-24">
            <Image
              className="object-cover rounded-md"
              src={imageUrl}
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
              {title}
            </span>
          </h1>
        </div>
        <div className="flex">
          <div className="flex-1 items-center justify-center">
            <div className="flex mt-10 prose prose-indigo prose-lg text-gray-medium sm:mx-20 lg:mx-80">
              <p>
                {postBody}
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

//export async function getServerSideProps({ query: { slug } }) {
//  const res = await fetch(`${API_URL}/api/posts/${slug}`);
//  const posts = await res.json();
//
//  return {
//    props: {
//      post: posts[0],
//    },
//  };
//}

export async function getServerSideProps(context) {
  console.log(context.query);

  return {
    props: {
      urlSlug: context.query.slug,
    },
  };
}
