import { authOptions } from "@/utilities/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="mx-auto mt-4 max-w-5xl px-6">
      <h1 className="text-3xl font-semibold">
        {session && session !== null
          ? " Welcome! You Signed In Successfully"
          : "You are not Signed In."}
      </h1>
      <div className="text-center text-3xl py-16">
        <Link href={'/my/dashboard'} className="underline">Go to dashboard</Link>
      </div>
    </main>
  );
}
