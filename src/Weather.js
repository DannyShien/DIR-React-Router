import React, { Component } from 'react';
import Axios from 'axios';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		let URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
        Axios.get(URL)
        .then(weatherData => {
            // console.log(weatherData.data);
            console.log(weatherData.data.main);
            let  icon = (weatherData.data.weather[0].icon)

            let temperature = (weatherData.data.main.temp);
            // console.log(temperature);

            let minTemp = (weatherData.data.main.temp_min);
            // console.log(minTemp);

            let maxTemp = (weatherData.data.main.temp_max);
            // console.log(maxTemp);

            let desc = (weatherData.data.weather[0].description)

            this.setState({
                icon: icon,
                temp: temperature,
                temp_min: minTemp,
                temp_max: maxTemp,
                desc: desc
            })
        });
	}

	render(){
		return(
			<div className='weather'>
				<h1>Real-time Atlanta Weather!</h1>
                <div className='weather-display'>
                    <p>Temp: {this.state.temp}°</p>
                    <p>Min: {this.state.temp_min}°</p>
                    <p>Max: {this.state.temp_max}°</p>
                    <p>Desc: {this.state.desc}</p>
                </div>
			</div>
		);
	}
}

export default Weather;
