'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const goTo = useRouter()
    const oauthLink = 'https://github.com/login/oauth/authorize?client_id=Ov23liD3MTgRLkYALjfZ'

  const navigate = (page: string) => {
    goTo.push(page)
  }
  return (
    <main className="flex md:flex-row flex-col gap-10 w-full min-h-screen bg-[#07071c] items-center justify-center">
      <button onClick={()=>navigate('/register')} className='w-[10rem] text-center h-[3rem] text-white bg-[#fc4747]'>Sign Up</button>
      <button onClick={()=>navigate('/login')} className='w-[10rem] text-center h-[3rem] text-white bg-[#fc4747]' >Login</button>
      <Link href={oauthLink} className='w-[10rem] transition-all duration-500 hover:text-red-500 hover:bg-white flex rounded-lg items-center justify-center text-center h-[3rem] text-white bg-[#fc4747]'>Login With Github</Link>
    </main>
  );
}
