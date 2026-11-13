
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
            {darkMode ? <body style = {{backgroundColor: "grey"}}></body>: <body style = {{backgroundColor: "white"}}></body>}
        </div>
    )
}