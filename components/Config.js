import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
const Config = ({ blok }) => {
  return (
    <div
      className="relative bg-white border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <img
                className="w-auto h-20 sm:h-10"
                src="storyblok-primary.png"
                alt=""
              />
            </Link>
          </div>
          {blok.header_menu.map((nestedBlok) => (
            <StoryblokComponent
              className=""
              blok={nestedBlok}
              key={nestedBlok._uid}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Config;