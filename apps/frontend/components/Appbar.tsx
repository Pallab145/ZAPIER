"use client"

import { useRouter } from "next/navigation"
import { LinkButton } from "./button/LinkButton"
import { PrimaryButton } from "./button/PrimaryButton"

export const Appbar = () => {
    const router = useRouter();
    return <div className="flex border-b justify-between p-3">
        <div className="flex flex-col justify-center text-2xl font-extrabold">
            Zapier
        </div>
        <div className="flex">
            <div className="pr-4">
                <LinkButton onClick={() => {}}>Explore apps</LinkButton>
            </div>
            <div className="pr-4">
                <LinkButton onClick={() => {}}>Contact sales</LinkButton>
            </div>
            <div className="pr-4">
                <LinkButton onClick={() => {
                    router.push("/login")
                }}>Sign in</LinkButton>
            </div>
            <div className="pr-4">
                <PrimaryButton onClick={() => {
                    router.push("/signup")
                }}>Sign up</PrimaryButton>
            </div>
        </div>
    </div>
}