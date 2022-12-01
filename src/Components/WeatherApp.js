import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from "../Styles/weatherApp.module.css";


export default function WeatherApp (){
const[weather,setWeather] =useState(null);

useEffect(()=>{

    fetchApi();

},[]);

useEffect(()=>{
    document.title="weather| "+weather?.location.name ?? "";
},[weather])

async function fetchApi(city = 'Damascus'){
    try{
        const request= await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
        console.log(request);
        const jsonData= await request.json();
        console.log(jsonData);
        setWeather(jsonData);
    }catch(error){
        console.log(error);
        }
}

    function handleChangecity(city){
        setWeather(null);
        fetchApi(city);
    }
    

    return (
        <div className={styles.weatherContainer}>
            
             <WeatherForm onChangeCity={handleChangecity}/>
             <WeatherMainInfo weather={weather}/>
        </div>

    );


}