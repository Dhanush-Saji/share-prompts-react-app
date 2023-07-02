import React from 'react'
import {signin,signout,useSession,getProviders} from 'next-auth/react';

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16'>Nav</nav>
  )
}

export default Nav