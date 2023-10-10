import { authOptions } from "@/app/utilities/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="mx-auto mt-4 max-w-5xl px-6">
      <h1 className="text-3xl font-semibold">
        {session && session !== null
          ? " Welcome! You Signed In Successfully"
          : "You are not Signed In."}
      </h1>
    </main>
  );
}
