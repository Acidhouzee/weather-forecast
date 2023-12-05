import WeatherByDay from "components/DailyWeather/WeatherByDay"
import Loader from '../components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { getLocation, getWeatherByCity } from '../API/WeatherAPI';

export const DailyWeather = ({data}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);

  }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <WeatherByDay data={data}/>
      )}
    </main>
  )
}
