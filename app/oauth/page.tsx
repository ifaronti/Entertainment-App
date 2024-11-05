'use client'

import UseOauth from "@/hooks/useOauth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

export default function Page() {
    const [err, setErr] = useState('')
    const searchParams = useSearchParams()
    const router = useRouter()
    const code = searchParams.get('code')

    const navigateOnSuccess = () => {
        return router.push('/dashboard')
    }

    useEffect(() => {
        if (code && code !== null) {
            UseOauth(code, navigateOnSuccess)
        }
        else {
            setErr('An err has occured please retry from homepage')
        }
        //eslint-disable-next-line
    }, [])
    
    return err ? <div className="w-full h-[100vh] gap-4 flex items-center flex-col justify-center">
        <p className="text-red-500 text-[14px]">{err}</p>
        <Link className="w-[10rem] text-center h-[3rem] text-white bg-[#fc4747]" href={'/'}>Retry</Link>
    </div>
        :
        <div className="w-full relative h-[100vh] gap-4 flex items-center flex-col justify-center">
            <p className="text-[1rem] text-red-500">Redirecting</p>
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#fc4747"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
}