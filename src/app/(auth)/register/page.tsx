import { ButtonRegisterLogin } from "@/components/ui/Button/ButtonRegisterLogin";
import { InputLabel } from "@/components/ui/InputLabel/InputLabel";
import Link from "next/link";

const Register = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-background">
            <h2 className="text-white text-[1.25rem] font-bold mb-4.5">Criar Conta</h2>
            <form className="w-full max-w-92 flex flex-col gap-6.5">
                <InputLabel label="Nome Completo" placeholderMessage="Digite seu nome" htmlFor="input-name"/>
                <InputLabel label="Email" placeholderMessage="Digite seu email" htmlFor="input-email"/>
                <InputLabel label="Senha" placeholderMessage="Digite sua senha" htmlFor="input-senha"/>
                <InputLabel label="Confirmar Senha" placeholderMessage="Confirme sua senha" htmlFor="input-confirmar-senha"/>
                <ButtonRegisterLogin typeButton="register"/>
            </form>
            <div className="flex gap-1 mt-6.5 items-center">
                <span className="text-[0.75rem] font-medium text-gray-light">Já é registrado ?</span>
                <Link href={"/login"}>
                    <button type="button" className="text-white flex items-center text-[0.75rem] font-medium cursor-pointer">Logar-se</button>
                </Link>
            </div>
        </div>
    );
};

export default Register;
