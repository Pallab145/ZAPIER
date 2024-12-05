"use client"

import { useRouter } from "next/navigation"
import { LinkButton_ } from "./button/LinkButton_";

export const SigninAppbar = () => {
    const router = useRouter();
    return <div className="flex border-b justify-between p-3">
        <div className="flex flex-col justify-center text-2xl font-extrabold">
            Zapier
        </div>
        <div className="flex justify-start">
            <div className="pr-40 ">
                <LinkButton_ onClick={() => {
                    router.push("/signup")
                }}>Sign up</LinkButton_>
            </div>
        </div>
    </div>
}