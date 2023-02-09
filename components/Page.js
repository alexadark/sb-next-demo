import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
  return (
    <main className="mt-4 text-center" {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </main>
  );
};

export default Page;
