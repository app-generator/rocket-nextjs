"use client";

import styles from "./Form.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Loader from "../loading";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
  fullName: string;
  password: string;
};

const Form = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") {
    router?.push("/my/dashboard");
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
  });

  const [message, setMessage] = useState<null | string>(null);

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { fullName, email, password } = form;
    
    await axios.post("/api/auth/register", {
      fullName,
      email,
      password,
    }).then((res:any) => {
      signIn("email", { email })
    }).catch((err:any) => {
      toast(err?.response?.data, { type: 'error' })
    })
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      autoComplete="off"
      className={`${styles.form_container} -mt-2 flex justify-center items-center flex-col`}
    >
      <fieldset className="w-full mx-4 flex justify-center items-center flex-col">
        <div className="w-full px-2">
          <label
            htmlFor="lastName"
            className="text-sm"
          >
            First Name
          </label>
          <input
            {...register("fullName", {
              required: "First Name is required",
            })}
            type="text"
            autoComplete="false"
            className="p-3 w-full border-solid border-[1px] border-[#EAECEF]"
          />
          {errors.fullName?.message && (
            <small className="block text-red-600">
              {errors.fullName.message}
            </small>
          )}
        </div>
        <div className="w-full px-2">
          <label
            htmlFor="email"
            className="text-sm"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            })}
            type="email"
            autoComplete="off"
            className="p-3 w-full border-solid border-[1px] border-[#EAECEF]"
          />
          {errors.email?.message && (
            <small className="block text-red-600">{errors.email.message}</small>
          )}
        </div>

        <div className="w-full px-2">
          <label
            htmlFor="password"
            className="text-sm"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            autoComplete="new-password"
            className="p-3 w-full border-solid border-[1px] border-[#EAECEF]"
          />
          {errors.password?.message && (
            <small className="block text-red-600">
              {errors.password.message}
            </small>
          )}
        </div>
      </fieldset>
      <div className="flex flex-col w-full items-center px-2">
        <p className="w-full text-left">
          <Link
            href="/login"
            className="text-lightColor hover:text-primaryColor hover:underline"
          >
            {" "}
            Login with an existing account
          </Link>
        </p>
        {message && <small className="block text-red-600">{message}</small>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-center my-12 flex-1 w-full bg-green-700 hover:bg-white hover:text-green-700 hover:border-green-700 hover:border-[1px] hover:font-semibold rounded-md p-[1rem] px-4 mx-2  text-white cursor-pointer"
        >
          Register
        </button>
      </div>
      {isSubmitting && <Loader />}
    </form>
  );
};

export default Form;
