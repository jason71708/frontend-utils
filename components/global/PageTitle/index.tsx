import Head from "next/head";

export default function PageTitle({ title }: { title: string }) {
  return (
    <Head>
      <title>{`${title} | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`}</title>
    </Head>
  )
}