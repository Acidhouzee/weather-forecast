import { createGlobalStyle } from "styled-components";

export const LoaderGlobalStyles = createGlobalStyle`
  .loader {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader:before {
    content: '';
    background: rgba(000, 000, 000, 0.3);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .loader-wrapper {
    z-index: 1;
  }
`
