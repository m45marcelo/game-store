interface ButtonRegisterLoginProps{
    typeButton: "login" | "register"
}
export const ButtonRegisterLogin = ({typeButton}: ButtonRegisterLoginProps) => {
    return(
        <button type="submit" className="flex w-full h-8.5 items-center justify-center bg-white text-background rounded-md text-[0.875rem] font-medium cursor-pointer hover:bg-white/90">
            {
                typeButton === "login" ? "Entrar" : "Criar Conta"
            }
        </button>
    )
}