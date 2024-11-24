import React from 'react'
import logo from '../../assets/logo.png'
import Images from '../../component/image/Images'
import { NavLink } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'


const Navbar = () => {
  return (
    <>
      <nav className='bg-[#fff] py-[30px] absolute ml-0 mr-0 w-full'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                 <div >
                    <Images src={logo} alt="Not Found"/>
                 </div>
                 <div className='flex items-center gap-x-[45px]'>
                    <div className='list-none items-center text-[#F95C19] flex gap-x-[25px]'>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink>Our Services</NavLink></li>
                        <li><NavLink>About Us</NavLink></li>
                        <li><NavLink>What's New</NavLink></li>
                    </div>
                    <div className='flex items-center gap-x-[20px]'>
                       <CiSearch className='bg-[#FFEDC9] p-[10px] text-[40px] cursor-pointer rounded-[8px] text-[#F95C19]'/>
                       <button className='bg-[#FFE4D9] rounded-[10px] py-[10px] px-[20px] outline-0 text-[18px] text-[#F95C19]'>Contact's Us</button>
                    </div>
                 </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
