import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({ blok }) => {
  return (
    <Link
      href={blok.link.cached_url}
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {blok.name}
    </Link>
  );
};
export default MenuLink;
