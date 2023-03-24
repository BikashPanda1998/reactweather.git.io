import React, { useEffect } from "react";
import { useState } from "react";
import "./css/style.css";
const TempApp =() =>{
    const[city, setCity]=useState(null);
    const[search, setSearch]=useState("Bhadrak");
    useEffect (()=>{
        const fetchApi = async ()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7cd3fa5e97c4c5bdf851815984f7c4d4`;
            const response =await fetch(url);
            //console.log(response);
            const Responsejson =await response.json();
            setCity(Responsejson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
            <div className="inputdata">
                <input type="search" value={search} className="inputfield" onChange={ (event) =>{
                    setSearch(event.target.value)
                }}/>
            </div>
        {!city ? (<p>No data Found</p>):(
            <div>
                <div className="info">
                <h2 className="location">
                <i className="bi bi-geo-fill"></i>{search}
                </h2>
                <h1 className="temp">
                    {city.temp}
                </h1>
                <h3 className="tempin-max">Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
        </div>
        <div className="wave-one"></div>
        <div className="wave-one"></div>
        <div className="wave-one"></div>
        </div>
            
        )}
        </div>
        </>
    );
}
export default TempApp;