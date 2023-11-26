import { getCurrentWeather } from 'API/WeatherAPI';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { changeIcons } from 'helpers/ChangeIcons';

const WeatherForecasts = ({data}) => {
  const [dailyWeatherData, setDailyWeatherData] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather(data.location.name, 2)
      .then((data) => {
        if (data) {
          setDailyWeatherData(data);
        }
      });
  }, [data]);

  useEffect(() => {
    if (dailyWeatherData !== null) {
      const weatherTwoDays = dailyWeatherData.forecast.forecastday[0].hour.concat(dailyWeatherData.forecast.forecastday[1].hour);
      const currentHour = new Date().getHours();
      const currentIndex = weatherTwoDays.findIndex(item => {
        const time = item.time.split(' ')[1];
        return Number(time.split(':')[0]) === currentHour;
      });
      const selectedHours = weatherTwoDays.slice(currentIndex, currentIndex + 4);
      setDailyWeather(selectedHours);
    }
  }, [dailyWeatherData]);

  return (
    <div className={'daily-weather'}>
     <div className='daily-weather-today'>
       <p>Today</p>
       <p>{format( new Date(), 'MMMM, d')}</p>
     </div>
      {dailyWeather ? (
        <div>
          <ul className='weather-list'>
            {dailyWeather
              .map(item =>
              <li key={item.time_epoch}>
                <p>{item.temp_c}°</p>
                <img alt={item.condition.text} src={changeIcons(item.condition.icon)} />
                <p>{item.time.split(' ')[1]}</p>
              </li>
              )}
          </ul>
        </div>
      ) : null
      }
    </div>
  )
}

export default WeatherForecasts;
