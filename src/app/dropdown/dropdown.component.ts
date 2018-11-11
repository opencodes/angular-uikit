import {Component, Input, OnInit} from '@angular/core';

export interface Item {
  url: string;
  text: string;
  isDivider: boolean;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  items = [
    {
      url: '',
      text: 'fsdf'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
