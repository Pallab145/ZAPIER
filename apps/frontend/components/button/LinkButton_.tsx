"use client";

export const LinkButton_ = ({ children, onClick }: {
    children: React.ReactNode,
    onClick: () => void
}) => {
    return (
        <div
            className="flex justify-center px-5 py-2 cursor-pointer bg-customOrange hover:shadow-md font-normal text-lg text-white rounded-full"
            onClick={onClick}
        >
            {children}
        </div>
    );
};
