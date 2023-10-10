import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Auth | Login",
};

export default function Login() {
  return (
    <main className="max-w-sm pb-12 mx-auto">
      <section>
        <Form />
      </section>
    </main>
  );
}
