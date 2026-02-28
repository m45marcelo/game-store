"use client"
import { ButtonRegisterLogin } from "../Button/ButtonRegisterLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputLabel } from "../InputLabel/InputLabel";
import { useForm } from "react-hook-form"
import { AuthUserTypeSchema, authUserValidateSchema } from "@/validators/user/authUser";

interface StateForm{
    email: string;
    password: string;
}

export const LoginForm = () => {
    const { register, reset, formState: { errors}, handleSubmit } = useForm<AuthUserTypeSchema>({
        resolver: zodResolver(authUserValidateSchema)
    })

    const onSubmit = (state: StateForm) => {
        console.log(state)
        reset()
    }
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-92 flex flex-col gap-2">
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
			<ButtonRegisterLogin typeButton="login" />
		</form>
	);
};
