import { useNavigate } from "react-router-dom";
import { HomePageGlobalStyles } from "./Home.styled";
import { changeIcons } from "helpers/ChangeIcons";

import { useState, useEffect } from "react";

export const Home = ({icon}) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (icon) {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
      };
      img.src = changeIcons(icon);
    }
  }, [icon]);

  return (
    <main>
      {imageLoaded ?
        (
          <>
            <img className="weather-icon" src={changeIcons(icon)} alt='Weather Icon' />
            <h1>Weather <span>ForeCasts</span></h1>
            <button className="btn" onClick={() => {navigate('/dailyweather')}}>Get Start</button>
            <HomePageGlobalStyles />
          </>
        ) : null
      }
    </main>
  )
}