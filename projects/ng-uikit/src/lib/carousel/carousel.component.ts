import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() items: { src: string, alt: string }[] = [];
  @Output() afterNext = new EventEmitter();
  @Output() afterPrev = new EventEmitter();
  activeIndex: number;
  count: number;
  width = '600px';

  constructor() {
  }

  ngOnInit() {
    this.activeIndex = 0;
    this.count = this.items.length;
  }

  next() {
    (this.activeIndex < this.count - 1) ? this.activeIndex++ : this.activeIndex = 0;
    this.afterNext.emit({
      index: this.activeIndex,
      item: this.items[this.activeIndex]
    });
  }

  prev() {
    (this.activeIndex >= 1) ? this.activeIndex-- : this.activeIndex = this.count - 1;
    this.afterPrev.emit({
      index: this.activeIndex,
      item: this.items[this.activeIndex]
    });
  }

  goTo(i: number) {
    this.activeIndex = i;
  }
}
