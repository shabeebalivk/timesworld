import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'

export default function Homepage() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;flag;region')
        .then(res =>{
            // console.log(res);
            setCountries(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    })
    return (
        <div className="homepage-main">
            <div className="homepage-nav">
                <div className="homepage-nav-left">
                    <h5>Countries</h5>
                </div>
                <div className="homepage-nav-right">
                    <h6>All</h6>
                    <h6>Asia</h6>
                    <h6>Europe</h6>
                </div>
                <div className="homepage-nav-right-res">
                    <button><i class="fas fa-bars"></i></button>
                </div>
            </div>
            
            <div className="homepage-countries">
                {countries.map(country =>(
                <div className="countries-list">
                    <div className="countries-flag">
                        <img src={country.flag} alt="flag"/>
                    </div>
                    <div className="countries-right">
                        <div className="countries-name">{country.name}</div>
                        <div className="countries-conti">{country.region}</div> 
                    </div>
                </div>
                 ))}
            </div>
            <div className="social">
                    <div className="sign-other-icon">
                        <i class="fab fa-google"></i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                    <p>Example@email.com</p>
                    <p>Copyright &copy 2020 Name.All right reserved</p>
                </div>
        </div>
    )
}
