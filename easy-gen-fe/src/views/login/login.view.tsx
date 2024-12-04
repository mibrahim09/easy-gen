"use client";

import LoginForm from "@/components/login-form/login-form";
import Link from "next/link";

export default function LoginView() {
  return (
    <div className={"flex items-center justify-center min-h-svh"}>
      <div className="border border-gray-300 rounded-xl bg-white shadow-lg p-5 w-[500px] flex flex-col gap-3">
        <p className={"text-center font-bold"}>Easy Generator Portal</p>
        <p className={"text-center font-light text-sm"}>Login</p>
        <div
          className={
            "text-center font-light text-sm flex gap-x-1 justify-center"
          }
        >
          <p>No account?</p>
          <Link
            className={"font-semibold hover:text-blue-400"}
            href={"/auth/signup"}
          >
            Click here to Register now
          </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
