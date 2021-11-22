import Avatar from "./Avatar";

const posts = [
  {
    title: "Find Me on LinkedIn",
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

let counter = 0;

function createSlug(title) {
  return `posts/${title.replace(/ /g, "-").toLowerCase()}`;
}

export default function BlogList({ slug }) {
  const titlesArray = posts.map(({ title }) => createSlug(title));
  console.log(titlesArray);
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
          {posts.map((post, counter) => (
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
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={titlesArray[counter]} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-dark">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-medium">
                      {post.description}
                    </p>
                    <p className="hidden">{counter++}</p>
                  </a>
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
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
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

export async function getStaticPaths() {
  return {
    //paths: [{ params: { slug: "test" } }],
    //props: { posts },
  };
}
