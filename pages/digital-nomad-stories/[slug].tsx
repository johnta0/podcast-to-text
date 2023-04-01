import path from "path";
import fs from "fs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type TranscriptPageProps = {
  title: string;
  content: string;
};

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL!}:${parseInt(process.env.PORT!, 10) || 3000}`;

// get all slugs from episodes table on supabase and return them as paths
export const getStaticPaths: GetStaticPaths = async () => {

  const res = await fetch(`${baseUrl}/api/getSlugs`);
  const data = await res.json()
  const slugs = data as string[];

  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ content: String }> = async (
  context
) => {
  const { slug } = context.params as IParams;
  const res = await fetch(`${baseUrl}/api/getTranscriptBySlug?slug=${slug}`);
  const data = await res.json()

  const content = data.transcript as string;
  return { props: { title: slug, content } };
};

const TranscriptPage: NextPage<TranscriptPageProps> = ({ title, content }) => {
  return (
    <Stack
      as="article"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="700px"
      w="100%"
      px={2}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        w="100%"
      >
        <Heading as="h1" size="2xl" mb={2} letterSpacing="tight">
          {title}
        </Heading>
        <Flex
          justify="space-between"
          align={["initial", "center"]}
          direction={["column", "row"]}
          mt={2}
          w="100%"
          mb={4}
        >
          <Flex align="center"></Flex>
        </Flex>
        {content}
      </Flex>
    </Stack>
  );
};

export default TranscriptPage;
