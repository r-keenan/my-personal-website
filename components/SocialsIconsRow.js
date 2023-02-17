import { social } from "@/config/index";

export default function SocialsIconsRow() {
  return (
    <div className="mt-8 flex justify-center space-x-6">
      {social.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.target}
          rel={item.rel}
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
