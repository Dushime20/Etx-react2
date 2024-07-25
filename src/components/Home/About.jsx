import React from 'react'
import Image5 from '../../assets/image/img5.png';
import Image6 from '../../assets/image/VeganFood.png';
import Image7 from '../../assets/image/MailboxQuality.png';

import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function About() {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <div className='flex flex-wrap  m-10 gap-3 '>
      <div className='w-96 '>
     
      <img src={Image5}/>

      </div>
      <div className='w-96 '>
        <div className=' '>
       <div className='text-[#7EB693] font-cursive italic text-xl text-left'>
       <p>About Us</p>
       </div>
       <div className='text-left mt-3 mb-3'>
       <h2 className='text-3xl text-[#274C5B] font-bold'>We believe in Working <br/>Accredited Farmeers</h2>
       </div>
        <div className='text-left text-xs'>
        <p>simply dummy text of the printing and typesetting
           industry. Lorem had ceased to been the industry's 
           standard dummy text ever since the 1500s, when 
          an unkown printertook a gallery</p>
        </div>
        </div>
        <div className='mt-8'>
          <div className='flex gap-3'>
          <div className='bg-slate-100 p-3'>
            <img src={Image6} alt="image" />
          </div>
          <div>
            <p className='text-left text-[#274C5B] font-bold'>Organic food only</p>
            <p className='text-left text-xs'>Lorem ipsum, dolor sit amet consectetur 
            dolor explicabo vel voluptatem veritatis. </p>
          </div>

          </div>
          <div className='flex mt-6 gap-3'>
          <div className='bg-slate-100 p-3'>
            <img src={Image7} alt="image" />
          </div>
          <div>
          <p className='text-left text-[#274C5B] text-bold'>Quality standard</p>
            <p className='text-left text-xs'>Lorem ipsum, dolor sit amet consectetur 
                        dolor explicabo vel voluptatem veritatis. </p>
            
          </div>
          

        
          </div>

        </div>
        <div className='text-left'>
          <button className='mt-20 bg-[#274C5B] text-[#f1f5f7] p-2 rounded-md text-xl'>Shop Now 
          <IconButton sx={{bgcolor:'#274C5B',color:'white'}}><ArrowForwardIcon/></IconButton> </button>
          </div>
      </div>
      
    </div>
    </div>
  )
}
