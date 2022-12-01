import { useState } from "react";
import style from "../Styles/weatherForm.module.css";

export default function WeatherForm ({onChangeCity}) {
    const [city,setCity]=useState("");

    const handleInputchange=(e)=>{
        const value=e.target.value;
        if(value!=""){
            setCity(value);
        }
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onChangeCity(city);
        document.getElementById("weatherInput").value="";
    }


    return(

        <form onSubmit={handleSubmit} className={style.container}>

            <input id="weatherInput" type="test" placeholder="Type a city name" onChange={handleInputchange} className={style.input} style={{ color:" #0a67bf"}}/>
            <input  type="submit" value="Get Weather" className={style.input} style={{backgroundColor:"#a4d3ff"}} />
        </form>

    );

}