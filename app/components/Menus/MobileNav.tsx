"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { BsPersonFill } from "react-icons/bs";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="flex max-w-3xl mx-auto sm:p-16 justify-between items-center lg:hidden p-6 cursor-pointer">
      <h1 className=" font-semibold tracking-wider sm:text-lg z-[100]">
        <Link href="/">Rocket NextJs</Link>
      </h1>
      <div className="z-[100] relative">
        <Hamburger
          size={25}
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      {isOpen && (
        <div className="flex absolute w-screen pt-[25%] bg-white z-50 inset-0 h-screen flex-col items-center cursor-pointer">
          {session ? (
            <>
              <p className="my-4 text-black  ">
                Signed in as {session.user?.email}
              </p>
              <p
                onClick={() => signOut()}
                className="bg-[#2c6e49] my-4 rounded-md p-2 px-4 mx-2 text-white"
              >
                <BsPersonFill /> Logout
              </p>
            </>
          ) : (
            <div>
              <p className="border-[1px] w-full my-4 text-center py-[10px] text-sm font-medium  border-solid rounded-[24px] px-6 border-green-700">
                <Link href="/login">Log in</Link>
              </p>
              <p className="rounded-[24px] my-4 text-white font-medium text-sm shadow-button py-[10px] px-6 w-full text-center bg-green-700 ">
                <Link href="/register">Register</Link>
              </p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
