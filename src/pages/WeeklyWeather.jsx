import WeeklyWeatherForecasts from "components/WeeklyWeatherForecasts/WeeklyWeatherForecasts"
import Loader from '../components/Loader/Loader';
import React, { useEffect, useState } from 'react';

export const WeeklyWeather = ({data}) => {

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
        <WeeklyWeatherForecasts data={data}/>
      )}
    </main>
  )
}
