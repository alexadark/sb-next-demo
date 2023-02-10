import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Hero = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className={`min-h-[500px]
    relative
    flex
    items-center
    justify-center
    p-9
    my-6
    rounded-[5px]
    overflow-hidden ${
      blok.layout === "constrained" ? "container mx-auto" : ""
    }`}
    >
      <div className="relative z-10 text-center">
        <h1 className="mb-3 text-6xl font-bold text-white">{blok.headline}</h1>
        <h2 className="text-4xl font-light text-white">{blok.subheadline}</h2>
      </div>
      <Image
        src={`${blok.background_image.filename}/m/1920x600/filters:brightness(${blok.brightness})`}
        fill
        alt={blok.background_image.alt}
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
      />
    </div>
  );
};

export default Hero;
