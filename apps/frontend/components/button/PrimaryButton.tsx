"use client"

export const PrimaryButton = ({ children , onClick, size="big" } : {
    children : React.ReactNode,
    onClick : () => void,
    size? : "big" | "small"
}) => {
    return <div onClick={onClick} className={`${size === "small" ? "text-sm" : "text-xl"} ${size === "small" ? "px-8 py-2" : "px-10 py-2"} cursor-pointer hover:shadow-md bg-customOrange text-white rounded-full text-center flex justify-center flex-col`}>
        {children}
    </div>
}