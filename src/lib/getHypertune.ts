import { createSourceForServerOnly } from "generated/hypertune";

const hypertuneSource = createSourceForServerOnly({
  token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN,
});

export default async function getHypertune() {
  await hypertuneSource.initIfNeeded(); // Check for flag updates

  return hypertuneSource.root({
    args: {
      context: {
        environment: process.env.NODE_ENV,
        user: { id: "1", name: "Test", email: "hi@test.com" },
      },
    },
  });
}
