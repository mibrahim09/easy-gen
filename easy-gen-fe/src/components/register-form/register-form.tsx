import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "@/components/register-form/register-form-schema";
import { useAuthOptions } from "@/hooks/auth/useAuthOptions";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const { createAccount } = useAuthOptions();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });
  const onSubmit = async (data: {
    email: string;
    name: string;
    password: string;
  }) => {
    try {
      const { email, name, password } = data;
      const result = await createAccount({ email, name, password });
      router.push("/auth/login");

      alert("Register successful");
      console.log("success=", result);
    } catch (ex: any) {
      const error = ex?.response?.data?.message;
      alert(`Failed to Register: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
      <div>
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
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
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>
        )}
      </div>
      <button className="bg-blue-500 w-full  text-white rounded-md p-2 hover:bg-blue-600 transition">
        Register
      </button>
    </form>
  );
}
