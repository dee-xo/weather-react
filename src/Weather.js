import React from "react";
import axios from 'axios';

export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp} ℃`);
    }
    let apiKey = "f37c9ae6d4f383a5c710381821c1b245"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return(
        <h2>
            Good Day
        </h2>
    )
}