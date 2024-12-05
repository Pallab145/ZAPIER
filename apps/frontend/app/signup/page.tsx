"use client"

import { useRouter } from "next/navigation";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { CheckFeature } from "../../components/CheckFeature";
import { InputBox } from "../../components/InputBox";
import { Link } from "../../components/Link";
import { SignupAppbar } from "../../components/SignupAppbar";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function() {
    const router = useRouter();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    return <div>
        <SignupAppbar />
        <div className="flex justify-center">
            <div className="flex pt-8 max-w-4xl">
                <div className="flex-1 pt-20 px-4">
                    <div className="font-semibold text-3xl pb-4">
                        Join millions worldwide who automate their work using Zapier.
                    </div>
                    <div className="pb-6 pt-4">
                        <CheckFeature label={"Easy setup, no coding required"} />
                    </div>
                    <div className="pb-6">
                        <CheckFeature label={"Free forever for core features"}/>
                    </div>
                    <CheckFeature label={"14-day trial of premium features & apps"}/>
                </div>
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
                    <div>
                        <InputBox label={"email"} type={"text"} placeholder={"xyz123@gmail.com"} onChange={(e) => {
                            setEmail(e.target.value);
                        }}></InputBox>
                    </div>
                    <div>
                        <InputBox label={"password"} type={"text"} placeholder={"**********"} onChange={(e) => {
                            setPassword(e.target.value);
                        }}></InputBox>
                    </div>
                    <div>
                        <InputBox label={"Full Name"} type={"text"} placeholder={"Elon Musk"} onChange={(e) => {
                            setName(e.target.value);
                        }}></InputBox>
                    </div>
                    <div className="pt-4 font-bold ">
                        <PrimaryButton onClick={async () => {
                            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
                                email,
                                password,
                                name
                            });
                            localStorage.setItem("token",response.data.token);
                            router.push("/dashboard");

                        }}>Get started for free</PrimaryButton>
                    </div>
                    <div className="pt-4 flex">
                        <div className="pl-16">
                            Already have an account?    
                        </div> 
                        <div className="pl-2 text-blue-700 underline underline-offset-1">
                            <Link onClick={() => {
                                router.push("/login")
                            }}>Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
}