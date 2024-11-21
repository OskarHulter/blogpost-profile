import { HypertuneProvider } from "generated/hypertune.react";

export default function AppHypertuneProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HypertuneProvider
      createSourceOptions={{
        token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN,
      }}
      rootArgs={{
        context: {
          environment: process.env.NODE_ENV,
          user: { id: "1", name: "Test", email: "hi@test.com" },
        },
      }}
    >
      {children}
    </HypertuneProvider>
  );
}
