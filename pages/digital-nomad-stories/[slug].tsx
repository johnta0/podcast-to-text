import path from 'path'
import fs from 'fs'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Box, Flex, Heading, Stack } from '@chakra-ui/react'


interface IParams extends ParsedUrlQuery {
  slug: string
}

type TranscriptPageProps = {
  title: string
  content: string
}

export const getStaticPaths: GetStaticPaths = () => {
  const transcriptDir = path.join(process.cwd(), 'public/transcripts')
  const filenames = fs.readdirSync(transcriptDir)

  const paths = filenames.map((filename) => ({ params: { slug: filename.replace(/\.txt$/, '') } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ content: String }> = async (context) => {
  const { slug } = context.params as IParams
  const transcriptPath = path.join(process.cwd(), `public/transcripts/${slug}.txt`)
  const content = fs.readFileSync(transcriptPath, 'utf8')
  return { props: { title: slug, content } }
}

const TranscriptPage: NextPage<TranscriptPageProps> = ({ title, content }) => {
  return (
    <Stack as="article" spacing={8} justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" w="100%" px={2}>
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
            mb={4}>
          <Flex align="center"></Flex>
        </Flex>
        {content}
      </Flex>
    </Stack>
  )
}


export default TranscriptPage