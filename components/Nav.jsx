"use client"
import React, { useEffect, useState } from 'react'
import {signin,signout,useSession,getProviders} from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setproviders] = useState(null)
  useEffect(()=>{
    const setProviders = async () =>{
      const response = await getProviders()
      setproviders(response)
    }
    setproviders()
  },[])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src='/assets/images/logo.svg' alt='logo' width={'30'} height={'30'} className='object-contain' />
        <p className='logo_text'>Promtopia</p>
      </Link>
      <div className='hidden md:flex'>
        {
          isUserLoggedIn?(
            <div className='flex gap-3 md:gap-5'>
              <Link href='/create-prompt' className='black_btn'>Create Post</Link>
              <button type='button' onClick={signout} className='outline_btn'>Sign Out</button>
              <Link href='profile'>
                <Image src='/assets/images/logo.svg' alt='profile' width={37} height={37} className='rounded-full' />
              </Link>
            </div>
          ):(
            <>
            {
              Object.values(providers).map((provider)=>(
                <button></button>
              ))
            }
            </>
          )
        }
      </div>
    </nav>
  )
}

export default Nav