import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ui-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @Input() source: any[];
  @Input() sourceURL: string;
  @Input() niddle;
  @Input() label = 'Name';
  @Output() selected = new EventEmitter();
  @Input() helpText = 'Enter at least 2 char to search';
  filteredList: any[] = [];
  selectedItem: any = (this.niddle) ? {} : "";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    if (this.sourceURL) {
      this.loadResponse();
    }
  }

  filter(key) {
    if (key && key.length >= 2) {
      this.filteredList = this.filterResult(key);
      console.log(this.filteredList);
    } else {
      this.filteredList = [];
      this.selectedItem = (this.niddle) ? {} : "";
    }
  }

  filterResult(key) {
    const result: any[] = [];
    this.source.forEach((item) => {
      const name = (this.niddle) ? item[this.niddle].toLowerCase() : item.toString().toLowerCase();
      if (name.indexOf(key.toLowerCase()) !== -1 && (result.length < 10)) {
        result.push(item);
      } else {
        return true;
      }
    });
    return result;
  }

  loadResponse() {
    const url = this.sourceURL || '../../assets/autocomplete.json';
    this.http.get(url).subscribe((res) => {
      if (Array.isArray(res)) {
        this.source = res;
      }
    });
  }

  getText(item) {
    return (this.niddle) ? item[this.niddle] : item;
  }

  selectItem(item) {
    this.selectedItem = item;
    this.filteredList = [];
    this.selected.emit(item);
  }
}
