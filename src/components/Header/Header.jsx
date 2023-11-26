import React from 'react'

const Header = ({weather, children}) => {
  if (!weather) {
    return  null;
  }
  return (
    <div className={'header-global'}>
      {children}
      <div className='header-current-temp'>
        <p>Wind: {weather.current.wind_kph} kph</p>
        <p>Feels Like: {Math.floor(weather.current.feelslike_c)}°</p>
      </div>
    </div>
  )
}

export default Header;
