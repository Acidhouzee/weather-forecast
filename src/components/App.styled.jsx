import { createGlobalStyle } from "styled-components";

export const AppGlobalStyles = createGlobalStyle`

  body,
  a {
    color: #000;
  }

  body.night,
  .night a {
    color: #fff;
  }

  .wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .content {
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    left: 50%;
    background: linear-gradient(222deg, rgba(43,97,109,1) 0%, rgba(165,195,207,1) 33%, rgba(196,223,230,1) 69%, rgba(102,165,173,1) 100%);
    transform: translate(-50%, -50%);
    width: 430px;
    height: 750px;
    overflow: hidden;
    border-radius: 50px;
  }

  .night .content {
    background: linear-gradient(157deg, rgba(30,31,38,1) 0%, rgba(40,54,85,1) 40%, rgba(77,100,141,1) 60%, rgba(208,225,249,1) 100%);
  }

  header {
    text-align: center;
    padding: 30px;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  nav a {
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0;
    text-decoration: none;
    transition: 0.3s all ease;
  }

  nav a:hover,
  nav a:focus {
    color: #DDB130;
  }

  @media(max-width: 767px) {
    .content {
      position: relative;
      width: 100%;
      height: 100vh;
      border-radius: 0;
      transform: none;
      top: 0;
      left: 0;
    }
    @media(max-width: 767px) {
      main {
        height: 45.6vw;
        height: 100%;
      }
    }
  }
`
