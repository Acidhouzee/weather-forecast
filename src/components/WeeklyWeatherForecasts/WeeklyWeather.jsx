import React, { useState } from 'react';
import Slider from 'react-slick';
import { format } from 'date-fns';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WeeklyWeatherStyles } from './WeeklyWeatherForecasts.styled';
import { changeIcons } from 'helpers/ChangeIcons';
import { testWeatherArr } from 'helpers/testData';
import sunrise from '../../images/sunrise.svg'
import sunset from '../../images/sunset.svg'

const WeeklyWeather = ({weather}) => {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const testWeather = testWeatherArr;

  return (
    <>
      <h2>7-Days Forecasts</h2>
      <div className='weather-slider'>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={4}
        >
          {testWeather.forecast.forecastday.map(item =>
            <div className='weather-slide' key={item.date_epoch}>
              <p>{item.day.maxtemp_c}°</p>
              <img alt={item.day.condition.text} src={changeIcons(item.day.condition.icon)} />
              <p>{format( new Date(item.date), 'iii')}</p>

            </div>
          )}
        </Slider>

        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          arrows={false}
          draggable={false}
          swipe={false}
          fade={true}
        >
          {testWeather.forecast.forecastday.map(item =>
            <div className='sun-items' key={item.date_epoch}>
              <div className='item'>
                <img src={sunrise} alt="sunrise" />
                <p>
                  Sunrise: 
                  <br />
                  <span>
                    {item.astro.sunrise}
                  </span>
                  </p>
              </div>
              <div className='item'>
                <img src={sunset} alt="sunrise" />
                <p>
                  Sunset: 
                  <br />
                  <span>
                    {item.astro.sunset}
                  </span>
                  </p>
              </div>
            </div>
          )}
        </Slider>
      </div>

      <WeeklyWeatherStyles />
    </>
  );
}

export default WeeklyWeather;
