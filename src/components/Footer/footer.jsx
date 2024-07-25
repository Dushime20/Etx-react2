import React from 'react'
import logo from '../../assets/image/log.png';

const Footer = () => {
  return (
    <div>
      
        <div className='flex flex-wrap  mt-8 items-center justify-center '>
           <div>
                <h1 className='text-[#274C5B] text-4xl font-bold m-4'>Contact Us</h1>
                <h5>Email</h5>
                <p>fabdushima20@gmail.com</p>
                <h5>Phone</h5>
                <p>07893536337</p>
                <h5>Address</h5>
                <p>Nyamirambo,Nyarugenge ,kigali, Rwanda</p>
            </div>
            <div className='h-32 w-px lg:bg-[#274C5B] mx-2'></div>
            <div>
                {/* <h1 className=' text-4xl'>hsjsjsss</h1> */}
                <div className=' cursor-pointer items-center flex m-4'>
        <img src={logo} className='w-10 h-10 m-3' alt="" />
            <li className='text-3xl  font-bold text-[#274C5B]'> Organick</li>
        </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </div>

            <div className='h-32 w-px lg:bg-[#274C5B] mx-2'></div>
           <div>
                <h1 className='text-[#274C5B] text-4xl font-bold m-4'>Utility Pages</h1>
                <p>Style Guide</p>
                <p>Style Guide</p>
                <p>Style Guide</p>
                <p>Style Guide</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
