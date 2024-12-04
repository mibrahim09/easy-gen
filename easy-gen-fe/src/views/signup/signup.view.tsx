"use client";

import RegisterForm from "@/components/register-form/register-form";
import Link from "next/link";

export default function SignUpView() {
  return (
    <div className={"flex items-center justify-center min-h-svh"}>
      <div className="border border-gray-300 rounded-xl bg-white shadow-lg p-5 w-[500px] flex flex-col gap-3">
        <p className={"text-center font-bold"}>Easy Generator Portal</p>
        <p className={"text-center font-light text-sm"}>Sign up</p>
        <div
          className={
            "text-center font-light text-sm flex gap-x-1 justify-center"
          }
        >
          <p>Have an account already?</p>
          <Link
            className={"font-semibold hover:text-blue-400"}
            href={"/auth/login"}
          >
            Click here to login
          </Link>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
