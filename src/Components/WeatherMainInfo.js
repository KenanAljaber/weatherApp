import { useEffect, useState } from "react";
import styles from "../Styles/weatherMainInfo.module.css"
export default function WeatherMainInfo({ weather }) {

   

    return <div>
        <div >
            <div className={styles.primaryInfo}>
        <div style={{fontWeight:"bold",fontSize:"30px"}}>{weather?.location.name}</div>
        <div >{weather?.location.country}</div>
        </div>
        <div className={styles.secondaryInfo}>
        <div>
        
            <img src={`http:${weather?.current.condition.icon}`} width="128px"
                alt={weather?.current.condition.text} />
        </div>
       
            <div>
            <div style={{marginTop:20,fontSize:"20px"}}>{weather?.current.condition.text}</div>
            <div style={{fontWeight:"bold",fontSize:"30px"}}>{weather?.current.temp_c}°</div>
            </div>

            </div>

            </div>
           
  

        <div style={{textAlign:"center"}}>
            <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15947.522447526906!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sec!4v1669854445471!5m2!1sen!2sec`}
                width="95%"
                height="270"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

    </div>
}