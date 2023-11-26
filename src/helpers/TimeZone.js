import { getLocation } from "API/WeatherAPI";

export function TimeZone() {
  const loc = getLocation();
  const userTimezoneOffset = new Date().getTimezoneOffset();
  const userTimezone = loc.timezone;
  const currentTimeInUserTimezone = new Date(new Date().toLocaleString("en-US", userTimezone ));

  currentTimeInUserTimezone.setMinutes(currentTimeInUserTimezone.getMinutes() + userTimezoneOffset);

  return currentTimeInUserTimezone;
}
