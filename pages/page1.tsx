import Link from "next/link";
import { useRouter } from "next/router";

export default function Page1() {
  const router = useRouter();
  return (
    <div>
      <h1>Page1</h1>
      {router.query.clicked ? (
        <Link href="/page2">Some non-shallow link</Link>
      ) : (
        <Link shallow href={{ query: { clicked: true } }}>
          Some shallow link
        </Link>
      )}
    </div>
  );
}
