
import {useState} from 'react' 

export default function Header({color}){
    const [darkMode, setDarkmode] = useState(false)

    function changeColor(){
        setDarkmode(!darkMode)
       

    }
    return(
        <div>
            <h1 className = "darkMode">Where in the world?</h1>
            <button onClick = {changeColor}>Switch Theme</button>
            {darkMode ? <body style = {{backgroundColor: "rgb(103, 103, 103)"}}></body>: <body style = {{backgroundColor: "rgb(240, 240, 240)"}}></body>}
            
        </div>
    )
}