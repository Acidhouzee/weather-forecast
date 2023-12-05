import { createGlobalStyle } from "styled-components";

export const DailyWeatherStyles = createGlobalStyle`
  .daily-weather {
    padding: 30px 56px;
    margin-top: 40px;
    border-radius: 30px;
    background: linear-gradient(57deg, rgba(43,97,109,1) 0%, rgba(165,195,207,1) 33%, rgba(196,223,230,1) 69%, rgba(102,165,173,1) 100%);
  }

  .night .daily-weather {
    background: linear-gradient(38deg, rgba(30,31,38,1) 0%, rgba(40,54,85,1) 40%, rgba(77,100,141,1) 60%, rgba(208,225,249,1) 100%);
  }

  .daily-weather-today {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(000, 000, 000, .3);
  }

  .night .daily-weather-today {
    border-bottom-color: rgba(255, 255, 255, .3);
  }

  .daily-weather-today p {
    margin: 0;
  }

  .weather-list {
    list-style-type: none;
    padding: 0;
    margin: 28px 0 0;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .weather-list li {
    font-size: 20px;
    width: 25%;
    text-align: center;
  }

  .weather-list li p {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media(max-width: 767px) {
    .weather-day-wrap {
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    .daily-weather {
      border-radius: 30px 30px 0 0;
    }
  }
`
