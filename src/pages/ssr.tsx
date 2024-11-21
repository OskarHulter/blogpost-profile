import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import getHypertune from "src/lib/getHypertune";
import type { FeaturePageProps } from 'src/pages/ssg'

export const getServerSideProps = (async () => {
  const hypertune = await getHypertune();

  const myFirstAPIFilter = hypertune.myFirstAPIFilter({ fallback: false });

  return { props: { myFirstAPIFilter } };
}) satisfies GetServerSideProps<FeaturePageProps>;

export default function SSRPage({
  myFirstAPIFilter,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>Flag: {myFirstAPIFilter}</div>;
}
