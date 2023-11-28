import { getLocation } from "API/WeatherAPI";

export function TimeZone() {
  const loc = getLocation();
  const userTimezone = loc.timezone;
  const currentTimeInUserTimezone = new Date(new Date().toLocaleString("en-US", userTimezone ));

  currentTimeInUserTimezone.setMinutes(currentTimeInUserTimezone.getMinutes());

  return currentTimeInUserTimezone;
}
