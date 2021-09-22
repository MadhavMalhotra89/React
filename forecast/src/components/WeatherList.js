import React from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import style from '../style/style.css';
import GoogleMap from './GoogleMap';

class WeatherList extends React.Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;

        return(
            <tr key={cityData.city.name}>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="red" units="hPa" /></td>
                <td><Chart data={humidities} color="blue" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ weather }) => {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);