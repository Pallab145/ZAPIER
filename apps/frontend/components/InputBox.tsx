"use client"

export const InputBox = ( { label,placeholder,type,onChange } : {
    label : string,
    placeholder : string,
    type : string,
    onChange : (e:any) => void
}) => {
    return <div>
        <div className="text-sm pb-1 pt-2">
            * <label>{ label }</label>
        </div>
        <input className="border rounded px-4 py-2 w-full border-black" type={type} placeholder={placeholder} onChange={onChange} />
    </div>
}