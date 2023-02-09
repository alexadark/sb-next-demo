import "~/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Grid from "~/components/Grid";
import Page from "~/components/Page";
import Teaser from "~/components/Teaser";
import Feature from "~/components/Feature";
import MenuLink from "~/components/MenuLink";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  menu_link: MenuLink,
};

storyblokInit({
  accessToken: "57h44lHQla035157swwjLQtt",
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
