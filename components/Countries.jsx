import { useState, useEffect } from 'react'
import '../App.css'

export default function Countries({style}) {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
     const [region, setRegion] = useState('all_regions')
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
     //filter countries ny search
     //If the region is set to all regions it shows all of them. 
     
        const visibleCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())
    && (region === 'all_regions') || country.region ===region);
        
     console.log(countries)
   return (
    //style is a prop from header
    <div style = {style}>
          <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}  placeholder="Search for a country..." />
           <select  value = {region} onChange={(event) => setRegion(event.target.value)}>
            <option value = "all_regions">All Regions</option>
            <option value = "Africa">Africa</option>
            <option value = "America">America</option>
            <option value = "Asia">Asia</option>
            <option value = "Europe">Europe</option>
            <option value = "Oceania">Oceania</option>
           </select>

        <ul>
            {visibleCountries.map(country => (
                <li key={country.name}>
                    <span className = "card_text">
                    <img loading = "lazy" src={country.flags.png}  />
                    
                    <div>{country.name}</div>
                    <div>Population: {country.population}</div>
                    <div>{country.capital}</div>
                    <div>{country.region}</div>
                    </span>
                </li>
            ))}
        </ul>

    </div>
)
}
