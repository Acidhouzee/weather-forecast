import { createGlobalStyle } from "styled-components";

export const WeeklyWeatherStyles = createGlobalStyle`
  .weather-slider {
    width: 500px;
    margin: 0 auto;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }
`