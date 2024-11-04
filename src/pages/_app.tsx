import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/dist/shared/lib/utils";
import Providers from 'src/components/providers'

import "src/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
      <Providers>
    <div className={GeistSans.className}>

      <Component {...pageProps} />
    </div>
      </Providers>
  );
};

export default MyApp;
