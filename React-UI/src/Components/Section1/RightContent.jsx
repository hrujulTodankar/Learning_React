import 'remixicon/fonts/remixicon.css'
import Card from './RightCard'



const right = () => {
  return (
    <div className='h-full
     w-2/3 p-8 flex gap-8'>
      <Card number="1" image="https://plus.unsplash.com/premium_photo-1661288427124-0404be82ff7a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card number="2" image="https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      
    </div>
  )
}

export default right
