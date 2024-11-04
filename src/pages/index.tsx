import Head from "next/head";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import type { Comments } from 'src/server/schema'
import { getComments } from 'src/server/helpers'
import Layout from 'src/components/layout'
import AbTestRunner from 'src/components/ab-test-runner'

export const getServerSideProps = (async () => {
  const comments = await getComments();

  return { props: { comments } }
}) satisfies GetServerSideProps<{ comments: Comments }>
 
export default function Home({ comments }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  if (!comments) return null;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <AbTestRunner comments={comments} />
      </Layout>
    </>
  );
}
