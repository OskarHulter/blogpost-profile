import AppHypertuneProvider from 'src/client/features/hypertune/app-hypertune-provider'

export default function Providers({ children }: { children: React.ReactNode }) {  
  return (
    <AppHypertuneProvider>
      {children}
    </AppHypertuneProvider>
  );
}
