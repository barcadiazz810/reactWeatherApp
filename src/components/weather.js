import React from 'react';

const Weather = props =>(
  <div>
    { props.city && props.country && <p><b>{props.city} <span>&nbsp;</span> <img src={props.country} width='20' height='20' alt=""/></b></p> }
    { props.temprature && <p><b>Temprature: </b>{props.temprature}</p> }
    { props.humidity && <p><b>Humidity: </b>{props.humidity}</p> }
    { props.description && <p><b>Description: </b>{props.description}</p> }
    { props.error && <p><b>Error: </b>{props.error}</p> }
  </div>
);

export default Weather
