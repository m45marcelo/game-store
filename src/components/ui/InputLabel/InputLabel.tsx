interface InputLabelProps{
    label: string;
    placeholderMessage: string;
    htmlFor: string;
}

export const InputLabel = ({label, placeholderMessage, htmlFor}: InputLabelProps) => {
    return(
        <div className="flex flex-col w-full gap-1.5">
            <label className="text-white text-[0.75rem] font-medium"  htmlFor={htmlFor}>{label}</label>
            <input className="h-8.5 w-full  rounded-3xl pl-3.5 bg-gray border border-border outline-0 placeholder:text-[12px] text-gray-light focus:outline-2 outline-gray-light" id={htmlFor} placeholder={placeholderMessage}/>
        </div>
    )
}