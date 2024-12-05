"use client"

import { useRouter } from "next/navigation"
import { LinkButton } from "./button/LinkButton"

export const SignupAppbar = () => {
    const router = useRouter();
    return <div className="flex border-b justify-between p-3">
        <div className="flex flex-col justify-center text-2xl font-extrabold">
            Zapier
        </div>
        <div className="flex justify-start">
            <div className="pr-40">
                <LinkButton onClick={() => {
                    router.push("/login")
                }}>Log in</LinkButton>
            </div>
        </div>
    </div>
}