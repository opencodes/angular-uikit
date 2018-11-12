import {Component, Input, OnInit} from '@angular/core';
import {Codes} from '../../demo';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {
  @Input() pageData: Codes;
  constructor() { }

  ngOnInit() {
  }

}
