import { createGlobalStyle } from "styled-components";

export const WeeklyWeatherStyles = createGlobalStyle`
  .content-wrap {
    padding: 40px;
  }

  h2 {
    margin-top: 52px;
    font-size: 24px;
    font-weight: 700;
  }

  .slick-slide img {
    max-width: 66px;
    margin: 0 auto;
  }

  .weather-slider {
    text-align: center;
  }

  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .slick-arrow.slick-prev:before,
  .slick-arrow.slick-next:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #FFFFFF;
    border-left: 2px solid #FFFFFF;
  }

  .slick-arrow.slick-prev:before {
    transform: rotate(-45deg);
  }

  .slick-arrow.slick-next:before {
    transform: rotate(135deg);
  }

  .slick-slide > div:first-child {
    margin-right: 7px;
  }

  .weather-slide {
    background: linear-gradient(57deg, rgba(43,97,109,1) 0%, rgba(165,195,207,1) 33%, rgba(196,223,230,1) 69%, rgba(102,165,173,1) 100%);
    border-radius: 50px;
  }

  .night .weather-slide {
    background: linear-gradient(38deg, rgba(30,31,38,1) 0%, rgba(40,54,85,1) 40%, rgba(77,100,141,1) 60%, rgba(208,225,249,1) 100%);
  }
  
  .sun-items {
    margin-top: 43px;
    display: flex !important;
    gap: 13px;
  }

  .sun-items .item {
    flex-basis: calc((100% - 13px) / 2);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
  }

  .item p {
    font-size: 16px;
    font-weight: 400;
    margin-top: 0;
  }

  .item p span {
    font-size: 28px;
    font-weight: 600;
  }
`