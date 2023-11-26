import axios from 'axios';

const API_KEY = 'f87ac8086c124471b65191842231411';
const BASE_URL = '//api.weatherapi.com/v1/current.json?';

export const getLocation = async () => {
  try {
    const response = await axios.get('//ipapi.co/json/');
    return response.data;
  } catch (error) {
    console.error('Error getting geolocation:', error);
  }
};


export const getWeatherByCity = (city) => {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: city
    },
  })
  .then((response) => response.data)
  .catch((error) => {
    console.error('Error fetching weather data:', error);
    throw error;
  });
};

export const getCurrentWeather = async (city, days = 1) => {
  try {
    const response = await axios.get(`//api.weatherapi.com/v1/forecast.json`, {
      params: {
        key: API_KEY,
        q: city,
        days: days,
      }
    });

    const weatherData = response.data;

    return weatherData;
  } catch (error) {
    console.error('Error getting weather for the week.', error);
  }
};
