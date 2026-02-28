import { LoginForm } from "@/components/ui/Form/LoginForm";

import Link from "next/link";

const Login = () => {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center bg-background">
			<h2 className="text-white text-[1.25rem] font-bold mb-4.5">Entrar</h2>
			<LoginForm/>
			<div className="flex gap-1 mt-6.5 items-center">
                <span className="text-[0.75rem] font-medium text-gray-light">Ainda não é registrado ?</span>
                <Link href={"/register"}>
					<button type="button" className="text-white flex items-center text-[0.75rem] font-medium cursor-pointer">Criar Conta</button>
				</Link>
            </div>
		</div>
	);
};

export default Login;
