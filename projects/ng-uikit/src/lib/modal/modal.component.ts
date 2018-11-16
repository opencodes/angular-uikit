import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  showModel: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.showModel = !this.showModel;
  }

}
