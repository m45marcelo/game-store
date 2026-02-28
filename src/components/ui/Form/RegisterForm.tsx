"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	type RegisterUserTypeSchema,
	registerUserValidateSchema,
} from "@/validators/user/registerUser";
import { ButtonRegisterLogin } from "../Button/ButtonRegisterLogin";
import { InputLabel } from "../InputLabel/InputLabel";

interface StateForm {
    name: string;
    email: string;
    password: string
}

export const RegisterForm = () => {
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<RegisterUserTypeSchema>({
		resolver: zodResolver(registerUserValidateSchema),
	});

	const onSubmit =  async (data: StateForm) => {
		try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(data)
            })

            if(!response.ok){
                const errorData = await response.json()
                throw new Error(errorData.error)
            }

            reset()
            console.log("Usuário criado", data)
        } catch (error) {
            console.error("Erro ao tentar registrar usuário:", error)
        }
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full max-w-92 flex flex-col gap-2"
		>
			<InputLabel
				name="name"
				label="Nome Completo"
				placeholderMessage="Digite seu nome"
				htmlFor="input-nome"
				register={register}
				error={errors.email}
			/>
			<InputLabel
				name="email"
				label="Email"
				placeholderMessage="Digite seu email"
				htmlFor="input-email"
				register={register}
				error={errors.email}
			/>
			<InputLabel
				name="password"
				label="Senha"
				placeholderMessage="Digite sua senha"
				htmlFor="input-senha"
				register={register}
				error={errors.password}
			/>
            <InputLabel
				name="repeatPassword"
				label="Confirmar Senha"
				placeholderMessage="Confirme sua senha"
				htmlFor="input-confirmar-senha"
				register={register}
				error={errors.password}
			/>
			<ButtonRegisterLogin typeButton="register" />
		</form>
	);
};
