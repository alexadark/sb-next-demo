import { StoryblokComponent } from "@storyblok/react";

const HeaderMenu = ({ headerMenu }) => {
  return (
    <div className="flex items-center justify-end flex-1 space-x-10 lg:w-0">
      {headerMenu?.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </div>
  );
};

export default HeaderMenu;
