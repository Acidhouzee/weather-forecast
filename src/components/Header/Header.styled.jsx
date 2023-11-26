import { createGlobalStyle } from "styled-components";

export const HeaderGlobalStyles = createGlobalStyle`
  .header-global {
    text-align: center;
  }
  .header-icon {
    display: block;
    width: 56%;
    margin: auto;
  }

  .header-temp {
    font-size: 64px;
    font-weight: 600;
    letter-spacing: 0.47px;
    margin: 0;
  }

  .header-condition {
    font-size: 24px;
    margin: 0 0 5px;
  }

  .header-current-temp {
    display: flex;
    justify-content: center;
    gap: 0 30px;
  }

  .header-current-temp > p {
    margin: 0;
  }
`
