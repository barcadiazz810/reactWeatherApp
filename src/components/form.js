import React, { Component } from 'react';

class Form extends Component
{
  state = {
    countryOption:undefined,
    countryCheck:false
  }
  getCountries = async () =>{
    const countryApi= await fetch('https://restcountries.eu/rest/v2/all');
    const data = await countryApi.json();
    const countryOption=data.map((map)=><option value={map.alpha2Code}>{map.name}</option>)

    this.setState({
      countryOption:countryOption,
      countryCheck:true
    })
  }

  componentWillMount(){
    this.getCountries();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.getWeather}>
          <div className="row">
            <div className="col-md-6">
              <input type='text' className="form-control" name='city' placeholder="City" />
            </div>
            <div className="col-md-6">
              { this.state.countryCheck && <select name='country' className="form-control">{this.state.countryOption}</select> }
            </div>
            <br/>
            <br/>
            <div className="col-md-12">
              { this.state.countryCheck && <button className="btn btn-primary form-control">Get weather</button> }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form
