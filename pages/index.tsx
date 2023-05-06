import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="px-4">
      <Head>
        <title>{process.env.NEXT_PUBLIC_WEBSITE_TITLE}</title>
        <meta name="description" content="Many use case in frontend" />
      </Head>
      <h1 className="text-3xl font-bold my-4">
        Hello world!
      </h1>
      <ul>
        <li><Link href="https://jason71708.github.io/mobile-height-unit-demo/">Mobile Height Unit</Link></li>
        <li><Link href="/deeplink">DeepLink</Link></li>
        <li><Link href="/virtual-scroll">Virtual Scroll</Link></li>
        <li><Link href="/race-condition-in-react">Race Condition In React</Link></li>
        <li><Link href="/event-emitter">Event Emitter</Link></li>
        <li><Link href="/intersection-observer-with-animation">Intersection Observer With Animation</Link></li>
      </ul>
    </div>
  );
}
