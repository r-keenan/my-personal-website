import { API_URL } from "@/config/index";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import Image from "next/image";
import client from "../../lib/sanity";

function formatBlogDate(dateTime) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var dateStr = "";

  try {
    var dtSplit = dateTime.split("-");
    var dateSplit = dtSplit[2].split("T");
    var month = months[parseInt(dtSplit[1] - 1)];
    var day = dateSplit[0];
    var year = dtSplit[0];

    dateStr = `${month} ${day}, ${year}`;
  } catch (error) {
    console.log(error);
  }

  return dateStr;
}

export default function Posts({ data }) {
  const { postsPreviewData } = data;

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
                <Link
                  href={{
                    pathname: `/posts/[slug]`,
                    query: { slug: post.slug.current },
                  }}
                >
                  <a>
                    <Image
                      className="object-cover"
                      src={`${process.env.NEXT_PUBLIC_SANITY_CDN_URL}${post.mainImage.asset._ref}`
                        .replace("-jpg", ".jpg")
                        .replace("image-", "")}
                      alt="BlogPhoto"
                      width={413}
                      height={192}
                      layout="responsive"
                      priority={true}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-light">
                    <Link href={"#"} className="hover:underline">
                      <a>Article</a>
                    </Link>
                  </p>
                  <Link
                    href={{
                      pathname: `/posts/[slug]`,
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
                    <a href={"/about_me"}>
                      <span className="sr-only">Ross Keenan</span>
                      <Avatar />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-dark">
                      <Link href={"/about_me"} className="hover:underline">
                        <a>Ross Keenan</a>
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-medium">
                      <time dateTime={post.datetime}>
                        {formatBlogDate(post.publishedAt)}
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

const postsPreviewQuery = `*\[_type == "post"\] | order(_createdAt desc)`;

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
