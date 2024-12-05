"use client"


export const Link = ({children,onClick} : {
    children : React.ReactNode,
    onClick : () => void
}) => {
    return <div className="cursor-pointer" onClick={onClick}> 
        {children} 
    </div>
}