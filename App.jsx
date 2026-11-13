import Header from "./components/Header"
import {useState, useEffect} from 'react'
import Countries from "./components/Countries"

export default function App(){
    const [darkMode, setDarkmode] = useState(false)


  return(

    <div>
      <Header />
      <Countries />
    </div>
  )
}