import { getCurrentWeather } from 'API/WeatherAPI';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import WeeklyWeather from './WeeklyWeather';
import { HeaderGlobalStyles } from 'components/Header/Header.styled';


const WeeklyWeatherForecasts = ({data}) => {
  const [weeklyWeather, setWeeklyWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather(data.location.name, 7)
      .then((data) => {
        if (data) {
          setWeeklyWeather(data);
        }
      });

  }, [data]);

  return (
    <div>
      {weeklyWeather && data ? (
        <div className='content-wrap'>
          <Header weather={data}><h1>{data.location.name}</h1></Header>
          <WeeklyWeather weather={weeklyWeather} />
          <HeaderGlobalStyles />
        </div>
      ) : null}
    </div>
  );
}

export default WeeklyWeatherForecasts;
