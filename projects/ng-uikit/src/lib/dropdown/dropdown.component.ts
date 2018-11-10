import {Component, Input, OnInit} from '@angular/core';

export interface Item {
  url: string;
  text: string;
  isDivider?: boolean;
}

@Component({
  selector: 'ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() buttonText = 'Your Button Text';
  @Input() isOpen;
  isShowDropdown = false;

  constructor() {
  }

  ngOnInit() {
    this.isShowDropdown = this.isOpen || false;
  }

  toggle() {
    this.isShowDropdown = !this.isShowDropdown;
  }

}
