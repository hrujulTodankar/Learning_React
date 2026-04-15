import React from 'react'
import Navbar from "./Navbar"
import Main from './Main'

const Section1 = (props) => {

  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Main users={props.users}/>
    </div>
  )
}

export default Section1
