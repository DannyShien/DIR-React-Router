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

            let temperature = ((weatherData.data.main.temp - 273.15) * 9/5 + 32).toFixed(1);
            console.log(temperature);

            let minTemp = ((weatherData.data.main.temp_min - 273.15) * 9/5 + 32).toFixed(1);
            console.log(minTemp);

            let maxTemp = ((weatherData.data.main.temp_max - 273.15) * 9/5 + 32).toFixed(1);
            console.log(maxTemp);

            this.setState({
                temp: temperature,
                temp_min: minTemp,
                temp_max: maxTemp
            })
        });
	}

	render(){
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
                <div>
                    The main temp is : {temp}
                    {minTemp}
                    {maxTemp}
                </div>
			</div>
		);
	}
}

export default Weather;
