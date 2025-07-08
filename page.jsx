'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext'
import toast from 'react-hot-toast'
import axios from 'axios'
import {apiRequest } from "@/utils/csrfHandler";

export default function Page() {
  const router = useRouter()
  const { setUser } = useUser()

  // form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      // establish Laravel session via Sanctum + CSRF
       //const sessionResp = await login(email, password)
      // then perform JWT login to get token and user
     const res = await apiRequest('post',`/user/login`, { email, password });
      const data = await res.data
      if (!res.status == 200 || data?.token == undefined || !data?.token) 
        {
          return toast.error('Login failed');
        }
      // on successful response, show toast and then store token and set user
      toast.success('Logged in successfully!')
      localStorage.setItem('pbsPortalToken', data.token)
      // Persist user for immediate context restoration
      localStorage.setItem('pbsPortalUser', JSON.stringify({ ...data.user, memberuser: data.memberuser }));
      setUser({ ...data.user, memberuser: data.memberuser })
      if(data.memberuser)
        router.push('/portal/dashboard')
      else window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/portal/subscribe`
    } catch (err) {
      setError(err.message)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center bg-[#37403D] overflow-x-hidden py-10 md:py-16"
         style={{
           backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
           backgroundSize: 'contain',
           backgroundPosition: 'center'
         }}>
      <img src="/pics/LOGO.png"
           alt="logo"
           className="w-16 md:w-24 xl:w-36 h-16 md:h-24 xl:h-36 mt-10" />
      <p className="font-conthrax text-4xl xl:text-6xl font-semibold text-[#DCE2E2]">
        LOGIN
      </p>

      <form onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-[80%] md:w-[60%] mx-auto rounded-xl bg-[#1E2322] p-6 lg:p-10">
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-1">
          <label htmlFor="email"
                 className="text-white text-lg font-semibold xl:text-xl">
            Email
          </label>
          <input
                 id="email"
                 type="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 required
                 className="bg-[#1E1E1E] focus:bg-white placeholder:text-opacity-40 p-2" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password"
                 className="text-white text-lg font-semibold xl:text-xl">
            Password
          </label>
          <input
                 id="password"
                 type="password"
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 required
                 className="bg-[#1E1E1E] focus:bg-white placeholder:text-opacity-40 p-2" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#8AD5B7] text-[#1E1E1E] font-semibold text-lg xl:text-xl py-2 rounded-lg hover:bg-[#6CBF9A] transition-all duration-300 ease-in-out disabled:opacity-50"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <div className="mt-6 lg:mt-10 flex flex-col gap-2">
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/portal/password/reset`} className="underline text-white font-semibold cursor-pointer">
            Forgot Password?
          </a>
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/portal/register`} className="underline text-white font-semibold cursor-pointer">
            Register
          </a>
        </div>

        <div className="flex justify-end cursor-pointer">
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/alerts#alert`} className="underline underline-offset-2 decoration-[#8BD5B7] font-semibold">
            <span className="text-white">New Member?</span>&nbsp;
            <span className="text-[#8BD5B7]">Register Here</span>
          </a>
        </div>
      </form>
    </div>
  )
}