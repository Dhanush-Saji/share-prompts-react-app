"use client"
import React, { useEffect, useState } from 'react'
import {signIn,signOut,useSession,getProviders} from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  const {data:sessionData} = useSession()
  const [providers, setproviders] = useState(null)
  const [istoggleDropdown, settoggleDropdown] = useState(false)
  useEffect(()=>{
    const setProvidersFn = async () =>{
      const response = await getProviders()
      setproviders(response)
    }
    setProvidersFn()
  },[])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src='/assets/images/logo.svg' alt='logo' width={'30'} height={'30'} className='object-contain' />
        <p className='logo_text'>Promtopia</p>
      </Link>
      {/* Desktop Navigation */}
      <div className='hidden md:flex'>
        {
          sessionData?.user?(
            <div className='flex gap-3 md:gap-5'>
              <Link href='/create-prompt' className='black_btn'>Create Post</Link>
              <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
              <Link href='profile'>
                <Image src={sessionData?.user?.image} alt='profile' width={37} height={37} className='rounded-full' />
              </Link>
            </div>
          ):(
            <>
            {
              providers && Object.values(providers).map((provider)=>(
                <button className='black_btn' type='button' key = {provider.name} onClick={()=>signIn(provider.id)}>Sign in</button>
              ))
            }
            </>
          )
        }
      </div>
      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {
          sessionData?.user?(
            <div className='flex'>
             <Image src={sessionData?.user?.image} alt='profile' width={37} height={37} className='rounded-full' onClick={()=>settoggleDropdown((prev)=>!prev)} />
             {
              istoggleDropdown && (
                <div className='dropdown'>
                  <Link href='/profile' className='dropdown_link' onClick={()=>settoggleDropdown(false)}>
                    My Profile
                  </Link>
                  <Link href='/create-prompt' className='dropdown_link' onClick={()=>settoggleDropdown(false)}>
                    Create Prompt
                  </Link>
                  <button className='mt-5 w-full outline_btn' type='button' onClick={()=>{
                    settoggleDropdown(false);
                    signOut()
                  }}>Sign Out</button>
                </div>
              )
             }
            </div>
          ):(
            <>
            {
              providers && Object.values(providers).map((provider)=>(
                <button className='black_btn' type='button' key = {provider.name} onClick={()=>signIn(provider.id)}>Sign in</button>
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