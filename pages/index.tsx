import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next history bug</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>Start</h1>
          <Link href="/page1">Page1</Link>
        </div>
      </main>
    </div>
  );
}
