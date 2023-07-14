import React from 'react'

import Container from './ui/container'

import Link from 'next/link'
import Image from 'next/image'

import Logo from "@/public/images/logo.png"
import MainNav from './mainNav'
import getCategories from '@/actions/getCategories'
import NavbarActions from './navbarActions'

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className='border-b'>
        <Container>
            <div className='relative py-2 px-4 sm:px-6 lg:px-8 flex items-center'>
                <Link href="/" className='ml-4 flex lg:ml-0 gap-x-2'>
                    <Image className='w-36 rounded-lg' src={Logo} alt='Zonetech' />
                </Link>
                <MainNav data={categories} />
                <NavbarActions />
            </div>
        </Container>
    </div>
  )
}

export default Navbar