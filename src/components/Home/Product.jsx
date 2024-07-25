import React from 'react';
import Image1 from '../../assets/image/1.png';
import Image2 from '../../assets/image/2.png';
import Image3 from '../../assets/image/3.png';
import Image4 from '../../assets/image/4.png';
import Image5 from '../../assets/image/5.png';
import Image6 from '../../assets/image/6.png';
import Image7 from '../../assets/image/7.png';
import Image8 from '../../assets/image/8.png';

import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Card } from '@mui/material';

const Product = () => {
  return (
    <Card>
        <div className='mt-8'>
            <p className='text-[#7EB693] font-mono italic text-xl'>Categories</p>
            <p className='text-3xl text-[#274C5B] font-bold'>Our Product</p>
        </div>
        <div className='flex gap-5 flex-wrap mt-8 items-center justify-center'>
        <div className=''>
            <img src={Image1}/>
        </div>
        <div className=''>
            <img src={Image2}/>
        </div>
        <div className=''>
            <img src={Image3}/>
        </div >
        <div className=''>
            <img src={Image4}/>
        </div>
        <div>
            <img src={Image5}/>
        </div>
        <div className=''>
            <img src={Image6}/>
        </div>
        <div className=''>
            <img src={Image7}/>
        </div>
        <div className=''>
            <img src={Image8}/>
        </div>
        
      
    </div>
    <div className='mb-8'>
          <button className='mt-20 bg-[#274C5B] text-[#f1f5f7] p-2 rounded-md text-xl'>Load more
          <IconButton sx={{bgcolor:'#274C5B',color:'white'}}><ArrowForwardIcon/></IconButton> </button>
          </div>
    </Card>
  )
}

export default Product
