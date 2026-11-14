import Header from "./components/Header"
import {useState, useEffect} from 'react'
import Countries from "./components/Countries"
import SearchBar from "./components/SearchBar"

export default function App(){
    const [darkMode, setDarkmode] = useState(false)


  return(

    <div>
      <Header />
      <SearchBar />
      <Countries />
      
    </div>
  )
}