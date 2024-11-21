import type {
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import getHypertune from "src/lib/getHypertune";

export type FeaturePageProps = { myFirstAPIFilter: boolean };

export const getStaticProps = (async () => {
  const hypertune = await getHypertune();

  const myFirstAPIFilter = hypertune.myFirstAPIFilter({ fallback: false });

  return { props: { myFirstAPIFilter }, revalidate: 10 };
}) satisfies GetStaticProps<FeaturePageProps>;

export default function SSGPage({
  myFirstAPIFilter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>Flag: {myFirstAPIFilter}</div>;
}
