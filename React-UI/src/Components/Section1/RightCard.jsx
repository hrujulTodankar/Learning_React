import React from 'react'

const Card = (props) => {

  console.log(props);
  return (
    <>
      <div className='h-full w-1/3 rounded-4xl overflow-hidden relative shrink-0'>
      <img className='h-full w-full object-cover' src={props.users.img} alt="" />

      <div className='absolute top-0 left-0 h-full w-full  flex flex-col justify-between px-8 py-10'>
        <div>
            <h4 className='bg-gray-500 text-white rounded-full flex h-20 w-20 justify-center items-center text-5xl font-semibold'>{props.id + 1}</h4>
        </div>
        <div className='text-3xl '>
            <p className='font-light italic pl-3'>{props.users.subtext}</p>
            <h4 className='font-semibold mt-4 px-6 py-3 rounded-full bg-blue-700 text-white w-fit'>{props.users.btntxt}<i className="ri-arrow-right-line ml-3"></i></h4>
        </div>
      </div>
      </div>
    </>
  )
}

export default Card
