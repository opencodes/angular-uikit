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
  size=2;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.columns = [
      {
        field: 'iD',
        label: 'ID',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'runId',
        label: 'runId',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'businessId',
        label: 'Business Id',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'dataType',
        label: 'dataType',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'status',
        label: 'status',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'totalSqoop',
        label: 'totalSqoop',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'newAdds',
        label: 'newAdds',
        sortable: true,
        className: 'col-md-1'
      },
      {
        field: 'processTimestamp',
        label: 'processTimestamp',
        sortable: true,
        className: 'col-md-1'
      }
    ];
    this.api.getJson('./assets/datatable.json').subscribe(res => {
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
