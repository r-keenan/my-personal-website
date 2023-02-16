const navigation = {
  main: [
    { name: "Posts", href: "/posts" },
    /*{ name: "Projects", href: "/projects" },*/
    { name: "Skills", href: "/skills" },
    { name: "About Me", href: "/about-me" },
    { name: "Contact", href: "/contact" },
  ],
};

import SocialsIconsRow from "./SocialsIconsRow";

export default function Footer() {
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
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <SocialsIconsRow />
        <p className="mt-8 text-center text-base text-gray-dark">
          &copy; {new Date().getFullYear()} Ross Keenan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
