import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatepickerService} from './datepicker.service';
import {DateObj, DefaultLocaleWeekdaysShort} from './datepicker.interface';


@Component({
  selector: 'ui-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Output() selected = new EventEmitter();
  @Input() mode: string = 'single' || 'range';
  items = [
    {
      url: 'a',
      text: 'Action',
      isDivider: true
    },
    {
      url: 'a',
      text: 'Another action'
    },
    {
      url: 'a',
      text: 'Something else here'
    }
  ];
  daysList: (any[] | any[] | any[] | any[] | any[] | any[])[];
  selectedDateTime: DateObj;
  defaultLocaleWeekdaysShort: string[] = DefaultLocaleWeekdaysShort;
  range: any = {
    from: null,
    to: null
  };

  constructor(private datepickerSvc: DatepickerService) {
  }

  ngOnInit() {
    const d = new Date();
    this.selectedDateTime = this.datepickerSvc.getDateJsonObj(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds()
    );
    this.daysList = this.datepickerSvc.getDatesOfMonth();
    console.log(this.selectedDateTime);
  }

  isWithinRange(day): boolean {
    if (day) {
      const a = this.selectedDateTime.numericDate.split('-');
      a[2] = (day <= 9) ? '0' + day : day + '';
      const today = parseInt(a.join(''), 10);
      const from = parseInt(this.range.from.numericDate.split('-').join(''), 10);
      const to = parseInt(this.range.to.numericDate.split('-').join(''), 10);
      console.log(today, from, to);
      return (today >= from && today <= to);
    }
    return false;
  }

  getSelectedClass(day) {
    let isSelected = false;
    day = parseInt(day, 10);
    if (this.mode === 'range') {
      if (this.range.from) {
        isSelected = (this.range.from.date === day);
      }
      if (this.range.from && this.range.to) {
        isSelected = this.isWithinRange(day);
      }
    } else {
      isSelected = this.selectedDateTime.date === day;
    }
    return {'c-datepicker__day--selected': isSelected};
  }

  setDate(day) {
    const d = this.selectedDateTime;
    this.selectedDateTime = this.datepickerSvc.getDateJsonObj(
      d.year,
      d.month,
      day,
      d.hours,
      d.minutes,
      d.seconds
    );
    if (this.mode === 'range') {
      if (this.range.from) {
        this.range.to = this.selectedDateTime;
      } else {
        this.range.from = this.selectedDateTime;
      }
      this.selected.emit(this.range);
    } else {
      this.selected.emit(this.selectedDateTime);
    }
    console.log(this.selectedDateTime, this.range);
  }

  prevMonth() {
    const d = this.selectedDateTime;
    this.selectedDateTime = this.datepickerSvc.getDateJsonObj(
      d.year,
      parseInt(d.month, 10) - 1,
      d.date,
      d.hours,
      d.minutes,
      d.seconds
    );
    this.daysList = this.datepickerSvc.getDatesOfMonth();
    this.selected.emit(this.selectedDateTime);
  }

  nextMonth() {
    const d = this.selectedDateTime;
    this.selectedDateTime = this.datepickerSvc.getDateJsonObj(
      d.year,
      parseInt(d.month, 10) + 1,
      d.date,
      d.hours,
      d.minutes,
      d.seconds
    );
    this.daysList = this.datepickerSvc.getDatesOfMonth();
    this.selected.emit(this.selectedDateTime);
  }
}
