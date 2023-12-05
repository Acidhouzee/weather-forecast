import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from "pages/Home";
import { useState, useEffect } from 'react'
import { DailyWeather } from "pages/DailyWeather";
import { WeeklyWeather } from "pages/WeeklyWeather";
import { getLocation, getWeatherByCity } from 'API/WeatherAPI';
import { AppGlobalStyles } from './App.styled';
import { dayOrNightTheme } from 'helpers/DayOrNightTheme';

export const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getLocation()
      .then((locationData) => {
        if (locationData) {
          setLocation(locationData.city)
        }
      });

    if(location !== null) {
      getWeatherByCity(location)
        .then((data) => {
          if (data) {
            setWeatherData(data);
            setTimeout(() => {
            }, 1000)
          }
        });
    }
  }, [location]);

  dayOrNightTheme();

  return (
    <div className='wrapper'>
      <div className='content'>
        <header>
          <nav>
            <NavLink to="/dailyweather">Daily</NavLink>
            <NavLink to="/weeklyweather">Weekly</NavLink>
          </nav>
        </header>
        {weatherData && (
          <Routes>
            <Route path="/" element={<Home icon={weatherData.current.condition.icon} />} />
              <Route path="/dailyweather" element={<DailyWeather data={weatherData} />} />
              <Route path="/weeklyweather" element={<WeeklyWeather data={weatherData} />} />
            {/*<Route path="*" element={} />*/}
          </Routes>
        )}
      </div>
      <AppGlobalStyles />
    </div>
  );
};
