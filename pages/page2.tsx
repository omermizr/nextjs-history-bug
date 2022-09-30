import Link from "next/link";
import { useRouter } from "next/router";

export default function Page2() {
  const router = useRouter();
  return (
    <div>
      <h1>Page2</h1>
      {!router.query?.clicked && (
        <Link replace shallow href={{ query: { clicked: true } }}>
          Shallow replace
        </Link>
      )}
    </div>
  );
}
