import React from 'react'
import logo from '../assets/logo.png';

const Nav = () => {
  return (
    <div className='w-100% flex flex-col gap-4 py-5 ' id='navbar'>
        <div className='logo flex justify-center'><img src={logo} alt="Yarsa Games" className='w-48 '/></div>
        <div id="nav_list">
            <ul className='flex gap-20 justify-center text-xl font-bold text-gray-600'>
                <li className='bg-blue-clr text-white px-4 py-2 rounded-xl'><a href="#" >Home</a></li>
                <li><a href="#" >Games</a></li>
                <li><a href="#" >Careers</a></li>
            </ul> 
        </div>

    </div>
  )
}

export default Nav