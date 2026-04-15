import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"



const App = () => {
  const data =[
    {
      img:'https://images.unsplash.com/photo-1663524789735-83fabcdd00bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtext:'lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repellendus debitis pariatur ullam tenetur fuga, ab placeat.',
      btntxt:'Satisfied',
    },
    {
      img:'https://images.unsplash.com/photo-1663524789640-09950e318dac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtext:'lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repellendus debitis pariatur ullam tenetur fuga, ab placeat.',
      btntxt:'Underserved',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1683121120533-89999a606862?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtext:'lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repellendus debitis pariatur ullam tenetur fuga, ab placeat.',
      btntxt:'Neutral',
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtext:'lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repellendus debitis pariatur ullam tenetur fuga, ab placeat.',
      btntxt:'Unsatisfied',
    }
  ]

  return (
  <>
  <Section1 users={data}/>
  <Section2 />
  </>
  
  )
}

export default App
