import WeeklyWeatherForecasts from "components/WeeklyWeatherForecasts/WeeklyWeatherForecasts"

export const WeeklyWeather = ({data}) => {
  return (
    <main>
      <WeeklyWeatherForecasts data={data}/>
    </main>
  )
}
