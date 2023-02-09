import "~/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Grid from "~/components/Grid";
import Page from "~/components/Page";
import Teaser from "~/components/Teaser";
import Feature from "~/components/Feature";
import MenuLink from "~/components/MenuLink";
import Hero from "~/components/Hero";
import Article from "~/components/Article";
import AllArticles from "~/components/AllArticles";
import PopularArticles from "~/components/PopularArticles";

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
