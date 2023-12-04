import { authOptions } from "@/utilities/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import DashboardPage from "./MainContent";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login/?callbackUrl=/dashboard");
  }
  return (
    <main className="min-h-screen px-4 pt-6">
      <DashboardPage />
    </main>
  );
}
