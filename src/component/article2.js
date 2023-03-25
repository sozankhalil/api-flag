import React from 'react'
import { useState, useEffect } from 'react';
import './article.css'
import Cards from './cards';
import Search from './search';


const Article = () => {
    const [user, setUser] = useState([]);

    const [input, setInput] = useState("")
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const myDatas = async () => {
        const datas = await fetch('https://restcountries.com/v3.1/all');
        const countries = await datas.json();
        setUser(countries);
    }
    useEffect(() => { myDatas(); }, []);

    const [filtered, setFilterd] = useState();

    const searchList = user.filter((item) => {
        return item.name.common.includes(input);
    });
    useEffect(() => { setFilterd(searchList) }, [input]);




    return (
        <>
            <Search handleChange={handleChange} input={input} />

            <div className='countries'>{
                filtered && filtered.map((country) => {
                    return (
                        <Cards {...country}></Cards>
                    )
                })

            }
            </div>
        </>

    )
}





export default Article;




// /
//  <div>
//             <h3>Country Name: {country.name.common}</h3>
//             <img src={country.flags.png} alt="" />
//             <p>Capital: {country.capital}</p>

//         </div>

// */