import React from 'react'
import logo from '../assets/logo.png'

const Nav = () => {
    return (
        <div className='w-100% py-5 md:flex justify-between px-12' id='navbar'>
            <div className='logo flex justify-center'>
                <img src={logo} alt="Yarsa Games" className='w-48 mb-5 md:w-52' />
            </div>
            <div id="nav_list" className='flex justify-center items-center '>
                <ul className='flex gap-9 justify-center text-xl font-bold text-gray-600 md:gap-16'>
                    <li className='bg-blue-clr text-white px-4 py-2 rounded-xl'><a href="#" >Home</a></li>
                    <li className='text-black hover:bg-green-500 hover:text-white px-4 py-2 rounded-xl transition duration-300 ease-in-out'><a href="#" >Games</a></li>
                    <li className='text-black hover:bg-blue-clr hover:text-white px-4 py-2 rounded-xl transition duration-300 ease-in-out'><a href="#" >Careers</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Nav