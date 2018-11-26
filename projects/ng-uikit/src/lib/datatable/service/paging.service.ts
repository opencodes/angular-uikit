import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {
  private _size: number;
  private _totalCount: number;

  constructor() {
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get totalCount(): number {
    return this._totalCount;
  }

  set totalCount(value: number) {
    this._totalCount = value;
  }

  getListOfPage(totalCount: number) {
    return Math.ceil(totalCount / this._size);
  }
}
