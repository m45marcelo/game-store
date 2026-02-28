import clsx from "clsx";
import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "@/components/ui/InputLabel/inputBorderStyles.module.css"

interface InputLabelProps{
    name: string;
    label: string;
    placeholderMessage: string;
    htmlFor: string;
    register: UseFormRegister<any>
    error: FieldError | undefined;
}

export const InputLabel = ({name, label, placeholderMessage, htmlFor, register, error}: InputLabelProps) => {
    return(
        <div className="flex flex-col w-full gap-1.5">
            <label className="text-white text-[0.75rem] font-medium"  htmlFor={htmlFor}>{label}</label>
            <input 
                className={clsx("h-8.5 w-full rounded-3xl pl-3.5 bg-gray border",
                    error ? styles.input_field_error : styles.input_field
                )}
                id={htmlFor} 
                placeholder={placeholderMessage}
                {...register(name)}
                />
            <div className="h-4 flex items-center">
                {
                    error && <span className="text-red text-[0.6875rem] font-normal">{error.message}</span>
                }
            </div>
        </div>
    )
}