import "~/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Grid from "~/components/bloks/Grid";
import Page from "~/components/bloks/Page";
import Teaser from "~/components/bloks/Teaser";
import Feature from "~/components/bloks/Feature";
import MenuLink from "~/components/bloks/MenuLink";
import Hero from "~/components/bloks/Hero";
import Article from "~/components/bloks/Article";
import AllArticles from "~/components/bloks/AllArticles";
import PopularArticles from "~/components/bloks/PopularArticles";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  menu_link: MenuLink,
  hero: Hero,
  article: Article,
  all_articles: AllArticles,
  popular_articles: PopularArticles,
};

storyblokInit({
  accessToken: "57h44lHQla035157swwjLQtt",
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
