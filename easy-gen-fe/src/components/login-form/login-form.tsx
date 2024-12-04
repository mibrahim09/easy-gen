import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "@/components/login-form/login-form-schema";
import { useAuthOptions } from "@/hooks/auth/useAuthOptions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { login, setAccessToken } = useAuthOptions();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });
  const onSubmit = async (input: { email: string; password: string }) => {
    try {
      const { data } = await login(input);
      setAccessToken(data.accessToken);
      router.push("/");
      alert("Login successful");
    } catch (ex: any) {
      const error = ex?.response?.data?.message;
      alert(`Failed to login: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
      <div className={""}>
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <button className="bg-blue-500 w-full  text-white rounded-md p-2 hover:bg-blue-600 transition">
        Login
      </button>
    </form>
  );
}
