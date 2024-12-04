import LoginForm from "@/components/login-form/login-form";

export default function LoginView() {
    return (
        <div className={'flex items-center justify-center min-h-svh'}>
            <div className="border border-gray-300 rounded-xl bg-white shadow-lg p-5 w-[500px] flex flex-col gap-3"
            >
                <p className={"text-center font-bold"}>Easy Generator Portal</p>
                <p className={"text-center font-light text-sm"}>Login</p>
                <LoginForm/>
            </div>
        </div>
    )
}