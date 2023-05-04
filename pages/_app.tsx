import type { AppProps } from 'next/app';
import 'styles/globals.css';
import WithTransition from "components/global/WithTransition";

export default function App({ Component, pageProps, router }: AppProps) {
  return <WithTransition
    Component={Component}
    pageProps={pageProps}
    router={router}
  />;
}
