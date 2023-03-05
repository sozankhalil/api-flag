import React from 'react'
import { useState, useEffect } from 'react';
import './article.css'
import Cards from './cards';


const Article = () => {
    const [user, setUser] = useState([]);

    const myDatas = async () => {
        const datas = await fetch('https://restcountries.com/v3.1/all');
        const countries = await datas.json();
        setUser(countries);
    }
    useEffect(() => { myDatas(); }, []);
    return (
        <div className='countries'>{
            user.map((country) => {
                return (
                    <Cards {...country}></Cards>
                )
            })

        }
        </div>
    )
}





export default Article;




/* 
 <div>
            <h3>Country Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Capital: {country.capital}</p>

        </div>

*/