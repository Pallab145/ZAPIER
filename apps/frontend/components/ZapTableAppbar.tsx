"use client"

import { useRouter } from "next/navigation"
import { ProfileButton } from "./button/ProfileButton";

export const ZapTableAppbar = () => {
    const router = useRouter();

    return <div className="flex border-b justify-between p-3">
        <div className="flex flex-col justify-center text-2xl font-extrabold">
            Zapier
        </div>
        <div className="flex justify-end">
            <ProfileButton onClick={ () => {
                    
            }}/>
        </div>
    </div>
}