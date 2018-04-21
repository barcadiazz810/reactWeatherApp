import React,{ Component } from 'react';
import Form from './components/form';
import Header from './components/header';
import Weather from './components/weather';

const API_KEY="60487cf148028df419d2457b65156d7e";

class App extends Component {

  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getFlag = async (code) =>{
    const api_call = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
    const data = await api_call.json();
    return data.flag;
  }


  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    const flag = await this.getFlag(data.sys.country);
    if(city && country)
    {
      this.setState({
        city: data.name,
        country: flag,
        temprature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
      console.log(this.state);
    }
    else
    {
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
      });
    }
  }

  render(){
    return(
      <div>
        <Header />
        <Form getWeather={this.getWeather}/>
        <Weather
          city={this.state.city}
          country={this.state.country}
          temprature={this.state.temprature}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
