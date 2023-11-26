import Header from 'components/Header/Header';
import React from 'react'
import WeatherForecasts from 'components/WeatherForecasts/WeatherForecasts';
import { changeIcons } from 'helpers/ChangeIcons';
import { DailyWeatherStyles } from '../WeatherForecasts/WeatherForecasts.styled';
import { HeaderGlobalStyles } from "../Header/Header.styled";

const WeatherByDay = ({data}) => {
  return (
    <div>
      <Header weather={data}>
        <img className={'header-icon'} src={changeIcons(data.current.condition.icon)} alt={data.current.condition.text} />
        <p className={'header-temp'}>{Math.floor(data.current.temp_c)}°</p>
        <p className={'header-condition'}>{data.current.condition.text}</p>
      </Header>
      <WeatherForecasts data={data} />
      <DailyWeatherStyles />
      <HeaderGlobalStyles />
    </div>
  )
}

export default WeatherByDay;
