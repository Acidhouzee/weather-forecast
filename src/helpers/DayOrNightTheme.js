import { TimeZone } from "./TimeZone";
import { format } from 'date-fns';

export function dayOrNightTheme() {
  const userTime = TimeZone();
  const time = format( new Date(userTime), 'k')

  if ( Number(time) >= 6 && Number(time) <= 18 ) {
    document.querySelector('body').classList.add('day');
  } else {
    document.querySelector('body').classList.add('night');
  }
}

