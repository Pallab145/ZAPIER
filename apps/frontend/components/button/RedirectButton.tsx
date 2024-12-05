"use client";

export const RedirectButton = ({ children, onClick }: {
    children: React.ReactNode,
    onClick: () => void
}) => {
    return (
        <div 
            onClick={onClick} 
            className="bg-lightPurple hover:bg-darkPurple cursor-pointer text-white font-semibold rounded px- py-2 text-sm transition duration-300 flex items-center justify-center whitespace-nowrap"
        >
            {children}
        </div>
    );
};
