import {Component, OnInit} from '@angular/core';
import {Codes} from '../shared/demo';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items = [
    {
      src: 'https://via.placeholder.com/600x400/367fa9/FFFFFF?auto=yes&bg=777&fg=555&text=First slide',
      alt: 'First slide'
    },
    {
      src: 'https://via.placeholder.com/600x400/dd4b39/FFFFFF?auto=yes&bg=777&fg=555&text=Second slide',
      alt: 'Second slide'
    },
    {
      src: 'https://via.placeholder.com/600x400/00a65a/FFFFFF?auto=yes&bg=777&fg=555&text=Third slide',
      alt: 'Third slide'
    }
  ];

  codes: Codes = {
    import: `import {CarouselModule} from 'ng-uikit'`,
    component: `export class CarouselComponent implements OnInit {

    items = [
      {
        src: 'https://via.placeholder.com/600x400/367fa9/FFFFFF?auto=yes&bg=777&fg=555&text=First slide',
        alt: 'First slide'
      },
      {
        src: 'https://via.placeholder.com/600x400/dd4b39/FFFFFF?auto=yes&bg=777&fg=555&text=Second slide',
        alt: 'Second slide'
      },
      {
        src: 'https://via.placeholder.com/600x400/00a65a/FFFFFF?auto=yes&bg=777&fg=555&text=Third slide',
        alt: 'Third slide'
      }
    ];
    logEvent(e) {
      console.log(e);
    }
  }`,
    html: `<ui-carousel
    [items]="items"
    (afterNext)="logEvent($event)"
    (afterPrev)="logEvent($event)">
</ui-carousel>`,
    properties: [{
      name: '',
      type: '',
      default: '',
      description: ''
    }],
    events: [{
      name: '',
      parameters: '',
      description: ''
    }],
    styling: [{
      selector: '',
      description: ''
    }]
  };
  language = 'html';
  title = 'Modal';

  constructor() {
  }

  ngOnInit() {

  }

  logEvent(e) {
    console.log(e);
  }


}
