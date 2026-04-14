import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftText = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between p-7'>
        <div>
             <h3 className='text-7xl font-bold'>Prospective<br/> 
             <span className=" text-gray-500 leading-20 ">Customer</span> <br/>
             <span className='font-mono mt-0'>Segmentation</span></h3>
             <p className='text-xl mt-6 font-medium text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque?
        </p>
        </div>
        <div>
            <i className="ri-arrow-right-up-line text-6xl"></i>
        </div>
    </div>
  )
}

export default LeftText
