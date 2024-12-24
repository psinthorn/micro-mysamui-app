import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from './../img/logo.png'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'



const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-800 dark:bg-slate-700 text-white py-2 px-5'>
      <div>
        <Link href="/" >
          <Image src={logo} alt="logo" width={50} height={50}  />
        </Link>
      </div>
      <div className='flex items-center justify-center gap-6'>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none text-sm text-gray-300' asChild>
              Setting
              {/* <Avatar className='w-[50px] h-[50px]'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='w-[50px] h-[50px]' />
                <AvatarFallback>F2</AvatarFallback>
              </Avatar> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/authentication">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='text-sm text-gray-300'>
          <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
          </SignedIn>
        </div>
        
      </div>     
    </div>
  )
}

export default Navbar