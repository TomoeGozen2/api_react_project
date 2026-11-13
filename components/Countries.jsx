import { useState, useEffect } from 'react'
import '../App.css'

export default function Countries() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('data.json')
            //response = response from server
            .then(response => response.json())
            //data = the data we are pulling from the server
            //setCountries(data) is so it dosent go away on refresh
            
            .then((data) => {
                setCountries(data)
                console.log(data)
               
            })
            .catch(e => {
                console.log(e)
            }

            )


            

    }, [])
     console.log(countries)
   return (
    <div>
        

        <ul>
            {countries.map(country => (
                <li key={country.name}>
                    <span className = "card_text">
                    <img src={country.flags.png}  />
                    
                    <div>{country.name}</div>
                    <div>Population: {country.population}</div>
                    <div>{country.capital}</div>
                    </span>
                </li>
            ))}
        </ul>

    </div>
)
}
