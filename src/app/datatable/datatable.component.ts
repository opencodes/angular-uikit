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
        field: 'busId',
        label: 'Changes',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'comments',
        label: 'Comments',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'busId',
        label: 'Business Id',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'busName',
        label: 'Business',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'status',
        label: 'Status',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'itemId',
        label: 'ItemID',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'poiId',
        label: 'PoiId',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'updated',
        label: 'Updated',
        sortable: true,
        className: 'col-md-1'
      }
    ];
    this.api.getJson('../assets/datatable.json').subscribe(res => {
      this.rows = res;
    });
  }

  onSort(e) {
    console.log(e);
  }

  onPageChange(e) {
    console.log(e);
  }
}
