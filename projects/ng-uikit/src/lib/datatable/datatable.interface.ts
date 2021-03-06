export interface Column {
  field: string;
  label: string;
  sortable: string;
  className: string;
}

export interface Page {
  startIndex: number;
  lastIndex: number;
  rows: any[];
}

export interface Paging {
  pageNum: number;
}
