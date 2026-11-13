import { useState, useEffect } from 'react'


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
        <h1>Test</h1>

        <ul>
            {countries.map(country => (
                <li key={country.name}>
                    <img src={country.flags.png}  />
                    {country.name}
                </li>
            ))}
        </ul>

    </div>
)
}
