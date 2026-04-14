import React from "react";
import Card from "./components/Card";


const companyList = [
  {
    companyName: "Google",
    title: "Senior Staff Frontend Engineer",
    pay: 2200,
    image: "https://placehold.co/200x200/4285F4/white?text=Google"
  },
  {
    companyName: "Meta",
    title: "Lead Product Engineer (React)",
    pay: 2150,
    image: "https://placehold.co/200x200/0668E1/white?text=Meta"
  },
  {
    companyName: "Amazon",
    title: "Principal UI Engineer (AWS)",
    pay: 2050,
    image: "https://placehold.co/200x200/FF9900/black?text=Amazon"
  },
  {
    companyName: "Apple",
    title: "Senior Human Interface Engineer",
    pay: 2300,
    image: "https://placehold.co/200x200/555555/white?text=Apple"
  },
  {
    companyName: "Netflix",
    title: "Senior UI Architect",
    pay: 2500,
    image: "https://placehold.co/200x200/E50914/white?text=Netflix"
  },
  {
    companyName: "Microsoft",
    title: "Senior Software Engineer (Azure)",
    pay: 1950,
    image: "https://placehold.co/200x200/00A4EF/white?text=Microsoft"
  },
  {
    companyName: "Nvidia",
    title: "Senior Web Platform Lead",
    pay: 2100,
    image: "https://placehold.co/200x200/76B900/white?text=Nvidia"
  },
  {
    companyName: "Tesla",
    title: "Senior UI Developer (Autopilot)",
    pay: 1850,
    image: "https://placehold.co/200x200/CC0000/white?text=Tesla"
  }
];




const App = () => {
  return (
   <div className="parent">
    {companyList.map((companyList , index) => {
      return(
        <div key={index}>
          <Card 
          company={companyList.companyName} 
          title={companyList.title} 
          price={companyList.pay} 
          image={companyList.image}
          />
        </div>
      )
    })}
   </div>
   
  )
}

export default App
