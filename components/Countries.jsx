import { useState, useEffect } from 'react'
import '../App.css'

export default function Countries({style}) {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        fetch('data.json')
            //response = response from server
            .then(response => response.json())
            //data = the data we are pulling from the server
            //setCountries(data) is so it dosent go away on refresh
            
            .then((data) => {
                setCountries(data)
                
                
                
               
            })
            .catch(e => {
                console.log(e)
            }

            )


            

    }, [])
     
        const visibleCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
        
    
  
     console.log(countries)
   return (
    <div style = {style}>
          <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}  placeholder="Search for a country..." />
           

        <ul>
            {visibleCountries.map(country => (
                <li key={country.name}>
                    <span className = "card_text">
                    <img loading = "lazy" src={country.flags.png}  />
                    
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
