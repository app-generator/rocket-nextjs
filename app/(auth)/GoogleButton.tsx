"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  const searchParams = useSearchParams()!;
  let callbackUrl = searchParams.get("callbackUrl")!;

  if (callbackUrl === null) {
    callbackUrl = "/my/dashboard";
  }

  return (
    <p
      onClick={() => signIn("google", { callbackUrl })}
      className=" flex items-center justify-between pl-4 flex-1   cursor-pointer hover:bg-[#F5F5F5] hover:font-medium  bg-[#EAECEF] py-4 my-4 rounded-lg text-center"
    >
      <FcGoogle
        size={20}
        className="align-text-top"
      />
      <span> Continue with Google</span>
      <span></span>
    </p>
  );
};

export default GoogleButton;
