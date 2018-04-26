import {Injectable} from '@angular/core';
import  {Item} from '../models/item.model'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";


@Injectable()
export class ItemService {
  private items: Item[] = [];
  itemUrl = 'assets/items.json';
  Stream:Subject<Item>;

  constructor(private http: HttpClient) {
    this.Stream = new Subject<Item>();
  }

  getItems() {
     return this.http.get<Item[]>(this.itemUrl);
  }

}
