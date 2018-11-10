import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatepickerService {

  constructor() {
  }

  getDatesOfMonth() {
    const d = new Date(), y = d.getFullYear(), m = d.getMonth();
    const f = new Date(y, m, 1);
    const l = new Date(y, m + 1, 0);

    const weekArr = new Array(7);
    const days = [
      weekArr, weekArr, weekArr, weekArr, weekArr, weekArr
    ];
    let c = f.getDay();
    let row = 0;
    for (let i = 1; i <= l.getDay(); i++) {
      days[row][c] = i;
      c++;
      if (c === 7) {
        row++;
        c = 0;
      }
    }
    console.log(days);
    return days;
  }
}
