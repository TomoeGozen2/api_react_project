
import { useState, useEffect } from 'react'
import Countries from './Countries';
export default function SearchBar() {
    const [search, setSearch] = useState('')
    const [visibleCountries, setVisibleCountries] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                
                setVisibleCountries(data);
            })
            .catch(error => console.log(error));
    }, []);
    //The idea is you filter the countries by search. Is bugged for some reason. 
    function HandleSearch() {
        const filteredCountry = visibleCountries.filter(country => country == search);
    
    }
        return (
            <div>
                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}  placeholder="Search for a country..." />
                <button onClick={HandleSearch}>Search for a country</button>

            </div>
        )
    }