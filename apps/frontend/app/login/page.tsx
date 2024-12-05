"use client";

import { useRouter } from "next/navigation";
import { RedirectButton } from "../../components/button/RedirectButton";
import { SigninAppbar } from "../../components/SigninAppbar";
import { InputBox } from "../../components/InputBox";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { Link } from "../../components/Link";


export default function LoginPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen">
            <SigninAppbar />
            <div className="flex justify-center pt-10">
                <div className="flex flex-col md:flex-row max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg space-y-10 md:space-y-0 md:space-x-10">
                    <div className="flex-1 md:pt-20">
                        <div className="font-semibold text-3xl pb-4">
                            Automate across your teams
                        </div>
                        <div>
                            <p>
                                Zapier Enterprise empowers everyone in your business to securely automate their work in minutes, not months—no coding required.
                            </p>
                        </div>
                        <div className="mt-6 w-auto">
                            <RedirectButton onClick={() => {
                                router.push('/signup');
                                }}>
                                Explore Zapier Enterprise
                            </RedirectButton>
                        </div>

                    </div>
                    <div className="flex-1 md:w-1/2">
                        <div className="text-black font-bold text-2xl mb-6">
                            Log in to your account
                        </div>
                        <div className="border p-6 rounded shadow-lg bg-gray-100">
                            <div className="mb-4">
                                <InputBox label={"Email"} type={"email"} placeholder={"xyz123@gmail.com"} onChange={(e) => {}} />
                            </div>
                            <div className="mb-4">
                                <InputBox label={"Password"} type={"password"} placeholder={"**********"} onChange={(e) => {}} />
                            </div>
                            <div className="pt-6">
                                <PrimaryButton onClick={() => {}}>Log in</PrimaryButton>
                            </div>
                        </div>
                        <div className="pt-4 flex">
                        <div className="pl-16">
                            Don't have a Zapier account yet?    
                        </div> 
                            <div className="pl-2 text-blue-700 underline underline-offset-1">
                                <Link onClick={() => {
                                    router.push("/signup")
                                }}>Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
