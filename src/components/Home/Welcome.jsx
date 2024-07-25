import React from 'react';
import Image1 from '../../assets/image/img1.png';
import Image2 from '../../assets/image/img2.png';
import Image3 from '../../assets/image/img3.jpg';
import Image4 from '../../assets/image/img4.jpg';
import content from '../../assets/image/Content.png';

import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Margin } from '@mui/icons-material';
const Welcome = () => {
  return (
    <section>
    <div className='w-full left-0 right-0'>
    <div
      className="bg-cover w-full  h-auto flex "
      style={{
        backgroundImage: `url(${Image2}), url(${Image1})`,
        backgroundSize: 'contain, cover',
        backgroundPosition: 'center, center',
      }}
    >
      <div className='w-64  ml-40 mt-40 h-96 p-4 text-center text-gray-300 top-64 '>
        <img src={content} alt="" />
        
      </div>
 </div>

 <div className='lg:flex flex space-x-6 mt-8  ml-12 mr-12 '>
      <div className='w-1/2 h-64 rounded-lg'
        style={{
          backgroundImage: `url(${Image3})`,
          backgroundSize: 'cover',
          backgroundPosition: ' center'
        }}>

            <div className='lg:ml-8 text-left w-32 mt-28'>
            <p className='text-[#eaf0ec] font-cursive text-xl '>
              Natural !!
            </p>
            <p className='text-[#f2f4f5] font-bold text-lg'>
              Get garden fresh fruit
            </p>
          </div>

      </div>
      <div className='w-1/2 h-64 mr-5 rounded-lg'
        style={{
          backgroundImage: `url(${Image4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className='lg:ml-8 text-left w-32 mt-28'>
        
           <p className='text-[#7EB693] font-cursive  text-xl '>
            Offers
            </p>
            <p className='text-[#274C5B] font-bold'>
              Get 10% off on Vegetables
            </p>
          
          </div>
      </div>

    </div>
   
    
 
    </div>
    </section>
  );
};

export default Welcome;
