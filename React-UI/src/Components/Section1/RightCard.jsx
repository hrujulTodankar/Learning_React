import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='h-full w-1/2 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={props.image} alt="" />

      <div className='absolute top-0 left-0 h-full w-full  flex flex-col justify-between p-18'>
        <div>
            <h4 className='bg-gray-500 text-white rounded-full flex h-20 w-20 justify-center items-center text-5xl font-semibold'>{props.number}</h4>
        </div>
        <div className='text-3xl '>
            <p className='font-medium italic pl-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repellendus debitis pariatur ullam tenetur fuga, ab placeat.</p>
            <h4 className='font-semibold mt-4 px-6 py-3 rounded-full bg-gray-500 text-white w-fit'>Satisfied<i className="ri-arrow-right-line ml-3"></i></h4>
        </div>
      </div>
      </div>
    </>
  )
}

export default Card
