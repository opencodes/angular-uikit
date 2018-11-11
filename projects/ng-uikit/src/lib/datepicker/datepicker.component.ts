import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatepickerService} from './datepicker.service';
import {DateObj, DefaultLocaleWeekdaysShort} from './datepicker.interface';

@Component({
  selector: 'ui-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Output() selected = new EventEmitter();
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

  getSelectedClass(day) {
    return {'c-datepicker__day--selected': this.selectedDateTime.date === parseInt(day, 10)};
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
    this.selected.emit(this.selectedDateTime);
  }

  prevMonth() {
    const d = this.selectedDateTime;
    this.selectedDateTime = this.datepickerSvc.getDateJsonObj(
      d.year,
      d.month - 1,
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
      d.month + 1,
      d.date,
      d.hours,
      d.minutes,
      d.seconds
    );
    this.daysList = this.datepickerSvc.getDatesOfMonth();
    this.selected.emit(this.selectedDateTime);
  }
}
