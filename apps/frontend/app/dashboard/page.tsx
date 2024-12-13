"use client"

import { useEffect, useState } from "react"
import { Zap } from "../../components/types/ZapsType";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { DarkButton } from "../../components/button/DarkButton";
import { useRouter } from "next/navigation";
import { ZapTable } from "../../components/ZapTable";
import { ZapTableAppbar } from "../../components/ZapTableAppbar";

function useZaps(){
    const [loading,setLoading] = useState(true);
    const [zaps,setZaps] = useState<Zap[]>([]);

    useEffect( () => {
        axios.get(`${BACKEND_URL}/api/v1/zap`,{
            headers :{
                Authorization : localStorage.getItem('token')
            }
        })
        .then( res => {
            setZaps(res.data.zaps),
            setLoading(false)
        })
    },[]);

    return{
        loading,zaps
    }
}

export default function() {

    const { loading,zaps } = useZaps();
    const router = useRouter();

    return <div>
        <ZapTableAppbar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg	 w-full">
                <div className="flex justify-between pr-8 ">
                    <div className="text-2xl font-bold">
                        My Zaps
                    </div>
                        <DarkButton onClick={() => {
                        router.push("/zap/create");
                        }}>Create</DarkButton>
                    </div>
                </div>
            </div>
            {loading ? "Loading..." : <div className="flex justify-center"> <ZapTable zaps={zaps} /> </div>}
    </div>
}