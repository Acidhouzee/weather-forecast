import { TimeZone } from "./TimeZone";
import { format } from 'date-fns';

export function dayOrNightTheme() {
  const userTime = TimeZone();
  const time = format( new Date(userTime), 'pppp')
  const newTime = time.split(':')

  if ( Number(newTime[0]) >= 6 && Number(newTime[0]) <= 18 ) {
    document.querySelector('body').classList.add('day');
  } else {
    document.querySelector('body').classList.add('night');
  }
}

