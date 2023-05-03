import type { AppProps } from 'next/app'
import 'styles/globals.css'
import PageWithTransition from "components/transitions/WithTransition";

export default function App({ Component, pageProps, router }: AppProps) {
  return <PageWithTransition
    Component={Component}
    pageProps={pageProps}
    router={router}
  />
}
