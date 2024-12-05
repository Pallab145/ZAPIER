"use client";

export const LinkButton = ({ children, onClick }: {
    children: React.ReactNode,
    onClick: () => void
}) => {
    return (
        <div
            className="flex justify-center px-2 py-2 cursor-pointer hover:bg-customSlate font-normal text-lg rounded"
            onClick={onClick}
        >
            {children}
        </div>
    );
};
