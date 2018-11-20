import {Component, OnInit} from '@angular/core';
import {Codes} from '../shared/demo';
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  codes: Codes = {
    import: `import {CarouselModule} from 'ng-uikit'`,
    component: `export class Demo implements OnInit { }`,
    html: `<ui-datatable></ui-datatable>`,
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
  title = 'Datatable';
  rows;
  columns;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.columns = [
      {
        field: 'name',
        label: 'Name',
        sortable: true,
        className:'col-md-3'
      },
      {
        field: 'position',
        label: 'Position',
        sortable: true,
        className:'col-md-3'
      },
      {
        field: 'office',
        label: 'Office',
        sortable: true,
        className:'col-md-2'
      },
      {
        field: 'extn',
        label: 'Extn',
        sortable: true,
        className:'col-md-1'
      },
      {
        field: 'startDate',
        label: 'Start Date',
        sortable: true,
        className:'col-md-2'
      }
    ]
    this.api.getJson('../assets/datatable.json').subscribe(res => {
      this.rows = res['data'];
    });
  }

  onSort(e) {
    console.log(e);
  }

  onPageChange(e) {
    console.log(e);
  }
}
