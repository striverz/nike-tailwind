import React from 'react'
import { headerLogo ,} from '../assets/images'
import { navLinks } from '../consts'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='border-black border-[1px] absolute w-full px-10 p-8'>
        <nav className='flex justify-between items-center'>
            <a href='./'>
                <img src={headerLogo}></img>
            </a>
            <ul className='flex max-lg:hidden'>
                {
                    navLinks.map((item)=>(
                        <li className='mx-4 cursor-pointer font-sans text-lg text-slate-gray' key={item.href}> {item.label}</li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} width={20} height={36}></img>
            </div>
        </nav>
    </header>
  )
}

export default Nav