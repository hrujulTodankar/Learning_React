import 'remixicon/fonts/remixicon.css'
import Card from './RightCard'



const right = (props) => {
  return (
    <div id="right-content" className='h-full
     w-2/3 p-8 flex flex-nowrap overflow-x-auto gap-4'>
      {props.users.map( (user,index) =>{
        return(
          <Card key={index} id={index} users={user}/>
        )
      })}  
      
    </div>
  )
}

export default right
