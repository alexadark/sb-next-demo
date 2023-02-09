import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";

const PopularArticles = ({ blok }) => {
  return (
    <div className="py-16 my-16 bg-slate-50">
      <h1 className="text-2xl font-bold text-center uppercase">
        Popular Articles
      </h1>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {blok.articles.map((article) => {
          return <ArticleTeaser article={article} key={article.uuid} />;
        })}
      </div>
    </div>
  );
};
export default PopularArticles;
