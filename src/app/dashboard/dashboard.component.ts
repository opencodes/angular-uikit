import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  codes = {
    download: `npm install ng-uikit --save`,
    import: `import {AccordionModule} from 'primeng/accordion'; `,
    html: `<ui-accordion></ui-accordion>`,
    dependencies: ['npm install --save bootstrap@^4.1.3', 'npm install --save  @fortawesome/fontawesome-free@^5.5.0'],
    modules: [{
      name: 'AccordionModule',
      description: 'Des'
    }, {
      name: 'CardModule',
      description: 'Des'
    }, {
      name: 'CarouselModule',
      description: 'Des'
    }, {
      name: 'ChartModule',
      description: 'Des'
    }, {
      name: 'DatatableModule',
      description: 'Des'
    }, {
      name: 'DatepickerModule',
      description: 'Des'
    }, {
      name: 'DropdownModule',
      description: 'Des'
    }, {
      name: 'ModalModule',
      description: 'Des'
    }, {
      name: 'TabModule',
      description: 'Des'
    }, {
      name: 'TooltipModule',
      description: 'Des'
    }]
  };
  language = 'html';
  title = 'Accordion';

  constructor() {
  }

  ngOnInit() {
  }

}
