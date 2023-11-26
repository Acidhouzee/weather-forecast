import WeatherByDay from "components/DailyWeather/WeatherByDay"

export const DailyWeather = ({data}) => {
  return (
    <main>
      <WeatherByDay data={data}/>
    </main>
  )
}
