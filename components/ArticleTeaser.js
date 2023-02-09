import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";

const ArticleTeaser = ({ article }) => {
  const { image, title, teaser } = article?.content || {};

  return (
    <div className="column feature">
      <div className="p-6">
        <Image
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src={image?.filename}
          width="0"
          height="0"
          sizes="100vw"
          alt="blog"
        />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          {title}
        </h1>
        <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
          {render(teaser)}
        </div>
        <div className="mt-4">
          <Link
            href={`/${article?.full_slug}`}
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
          >
            Read More »
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ArticleTeaser;
