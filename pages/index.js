import Head from "next/head";

import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import Layout from "~/components/Layout";

export default function Home({ story, headerMenu }) {
  story = useStoryblokState(story);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout headerMenu={headerMenu}>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
    resolve_links: "url",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get("cdn/stories/config");

  return {
    props: {
      story: data ? data.story : false,
      headerMenu: config?.story?.content?.header_menu,
    },
    revalidate: 3600,
  };
}
