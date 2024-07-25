import { Avatar, IconButton,FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/image/log.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Navbar = () => {
  const [pages, setPages] = useState('Pages');

  const [nav,setNav] = useState(false);

  const handleNav = ()=>{
    setNav(!nav);
  }

  const handleChange = (event) => {
    setPages(event.target.value);
  };
  return (
    <div className='px-4  z-50 lg:px-30 flex items-center justify-between py-12 top-0 sticky h-24 max-auto max-w-[1240px] '>
        <div className='lg:mr-24  cursor-pointer items-center flex'>
        <img src={logo} className='w-10 h-10 m-3' alt="" />
            <li className='text-3xl  font-bold text-[#274C5B]'> Organick</li>
        </div>
        <div className=' items-center mr-10 cursor-pointer hidden md:flex'>
           <ul className='flex gap-5 font-semibold'>
            <li className='text-xl font-semibold text-[#274C5B]'>
              Home
            </li>
            <li className='text-xl font-semibold text-[#274C5B]'>
              About
            </li>
      

           <div className='flex'>
           <li className='text-xl font-semibold text-[#274C5B]'>Pages</li>
           <ArrowDropDownIcon/>
           </div>
            
           
            <li className='text-xl font-semibold text-[#274C5B]'>
              Shop
            </li>
            <li className='text-xl font-semibold text-[#274C5B]'>
              Projects
            </li>
            <li className='text-xl font-semibold text-[#274C5B]'>
              News
            </li>

            
           </ul>
        </div>
      
       <div className='lg:w-80   lg:bg-slate-50 rounded-3xl h-14'>
        <IconButton className='lg:absolute lg:left-32 absolute left-10'>
                
                <Avatar sx={{bgcolor:'#7EB693'}}>
                <SearchIcon/>
                </Avatar>
              
              </IconButton>
        </div>
        <div className='lg:w-32 ml-4 h-14 border border-gray-100 rounded-3xl hidden md:block'><IconButton >
              <Avatar sx={{bgcolor: '#274C5B',color:'white', left: 0}}>
              <ShoppingCartIcon/>
              </Avatar>
            </IconButton>
            <span className='text-[#274C5B]'>Cart(0)</span>

        
       </div>
       <div onClick={handleNav} className='block md:hidden'>
        {nav ? (<IconButton sx={{marginLeft:5}}><CloseIcon sx={{fontSize: 40}}/></IconButton>): (<IconButton sx={{marginLeft:5}}>
           <MenuIcon sx={{fontSize: 50}}/>
           </IconButton>)}
          
       </div>
      <div className={nav ?'fixed    text-left left-0 top-0 w-[60%] border-r border-r-gray-100 h-full bg-[#f1f1f1] ease-in-out duration-500':'fixed left-[-100%]'}>

      <div className='lg:mr-24 cursor-pointer items-center flex'>
        <img src={logo} className='w-10 h-10 m-3' alt="" />
            <li className='text-3xl  font-bold text-[#274C5B]'> Organick</li>
        </div>
        <ul className='m-4 uppercase cursor-pointer'>
        <li className='text-xl font-semibold text-[#274C5B] p-4 hover:border-b border-gray-700'>
              Home
            </li>
            <li className='text-xl font-semibold text-[#274C5B] p-4 hover:border-b border-gray-700'>
              About
            </li>
      

            <div className='flex  font-semibold text-[#274C5B] p-4 hover:border-b border-gray-700'>
           <li className='text-xl '>Pages</li>
           <ArrowDropDownIcon/>
           </div>
            
           
            <li className='text-xl font-semibold text-[#274C5B] p-4 hover:border-b border-gray-700'>
              Shop
            </li>
            <li className='text-xl font-semibold text-[#274C5B] p-4 hover:border-b border-gray-700'>
              Projects
            </li>
            <li className='text-xl font-semibold text-[#274C5B] p-4 hover:border-b border-gray-700'>
              News
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
