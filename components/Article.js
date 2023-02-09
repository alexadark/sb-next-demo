import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";

const Article = ({ blok }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
        <Image
          className="object-cover object-center w-full mb-10 rounded md:h-96"
          alt={blok.image?.alt}
          src={blok.image?.filename}
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            {blok.title}
          </h1>
          <h1 className="mb-4 text-2xl font-medium text-gray-600 title-font sm:text-3xl">
            {blok.subtitle}
          </h1>
          <div className="max-w-full mb-8 leading-relaxed prose text-justify">
            {render(blok.content)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Article;
