import {Component, Input, OnInit} from '@angular/core';

export interface Config {
  src?: string;
  alt?: string;
  title?: string;
}

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() config: Config;

  constructor() {
  }

  ngOnInit() {
  }

}
