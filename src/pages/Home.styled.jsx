import { createGlobalStyle } from "styled-components";

export const HomePageGlobalStyles = createGlobalStyle`
  .weather-icon {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-top: 4.5vw;
    width: 70%;
    height: auto;
  }

  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: -0.037em;
    text-align: center;
  }

  h1 span {
    font-weight: 500;
    color: #DDB130;
  }

  .btn {
    cursor: pointer;
    display: flex;
    margin: 0 auto;
    padding: 0.5em 2.5em;
    font-size: 28px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.02em;
    color: #d0e1f9;
    background-color: #1e1f26;
    border: none;
    border-radius: 30px;
    box-shadow: 0 3px 50px rgba(221, 177, 48, 0.07);
    transition: 0.3s all ease;
  }

  .btn:hover,
  .btn:focus {
    color: #d0e1f9;
    background-color: #4d648d;
    box-shadow: 0 3px 50px rgba(54, 42, 132, 0.07);
  }

  .day .btn {
    background-color: #003b46;
    box-shadow: 0 3px 50px rgba(0, 59, 70, 0.07);
  }

  .day .btn:hover,
  .day .btn:focus {
    color: #d0e1f9;
    background-color: #07575b;
    box-shadow: 0 3px 50px rgb(7, 87, 91, 0.07);
  }
`
