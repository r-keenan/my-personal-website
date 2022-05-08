import { API_URL } from "@/config/index";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import client from "../../lib/sanity";

const posts = [
  {
    title: "Check Out the PWA",
    slug: "check-out-the-PWA",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "I added PWA support for this site!",
    date: "Jan 11, 2022",
    datetime: "2022-1-11",
    imageUrl:
      "https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1687&q=80",
    readingTime: "3 min",
    author: {
      name: "Ross Keenan",
      href: "/about_me",
    },
  },
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
    readingTime: "3 min",
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
    readingTime: "3 min",
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
    readingTime: "3 min",
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
    description: "Built with Next.js, Tailwind CSS, Tailwind UI, and Supabase.",
    date: "Dec 31, 2021",
    datetime: "2021-11-14",
    imageUrl:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    readingTime: "3 min",
    author: {
      name: "Ross Keenan",
      href: "/about_me",
    },
  },
];

export default function Posts({ data }) {
  const { postsPreviewData } = data;

  console.log(postsPreviewData);
  //const router = useRouter();
  //const refreshData = () => {
  //  router.replace(router.asPath);
  //};
  //async function handleNewData() {
  //  const res = await fetch(`${API_URL}/api/posts`);
  //  if (res.status < 300) {
  //    refreshData();
  //  }
  //}
  //handleNewData();
  //console.log(posts);
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
          {postsPreviewData.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                {/* 
                <Image
                  className="object-cover"
                  src={post.mainImage.asset}
                  alt=""
                  width={413}
                  height={192}
                  layout="responsive"
                  priority={true}
                />
                */}
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-light">
                    {/* 
                    <Link href={post.category.href} className="hover:underline">
                      <a>{post.category.name}</a>
                    </Link>
                    */}
                  </p>
                  <Link
                    href={{
                      pathname: `/posts/${post.slug.current}`,
                      query: { slug: post.slug.current },
                    }}
                  >
                    <a className="block mt-2">
                      <p className="text-xl font-semibold text-gray-dark">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-medium">
                        {post.excerpt}
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
                      {/*
                      <Link href={post.author.href} className="hover:underline">
                        <a>{post.author.name}</a>
                      </Link>
                       */}
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

const postsPreviewQuery = `*\[_type == "post"\] {
  title,
  slug,
  excerpt,
  mainImage,
  author
}`;

export async function getStaticProps() {
  const postsPreviewData = await client.fetch(postsPreviewQuery);

  const data = { postsPreviewData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
