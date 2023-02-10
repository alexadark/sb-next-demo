import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <h2 className="mb-10 text-2xl" {...storyblokEditable(blok)} key={blok._uid}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
