import { socials } from "@/components/Socials";
import type { NextRouter } from "next/router";

const navigation = {
  main: [
    { name: "Posts", href: "/posts" },
    /*{ name: "Projects", href: "/projects" },*/
    { name: "Skills", href: "/skills" },
    { name: "About Me", href: "/about-me" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer(props: any) {
  const handleMouseEnter = (url: string) => {
    // Prefetch URL on Mouser enter
    props.router.prefetch(url);
  };
  return (
    <footer className="bg-gray-light">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-dark hover:text-blue-light"
                onMouseEnter={() => handleMouseEnter(item.href)}
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="text-gray-400 hover:text-gray-500"
              onMouseEnter={() => handleMouseEnter(item.href)}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-dark">
          &copy; {new Date().getFullYear()} Ross Keenan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
