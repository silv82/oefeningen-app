import {Injectable} from '@angular/core';
import  {Item} from '../models/item.model'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ItemService {
  private items: Item[] = [];
  itemUrl = 'assets/items.json';

  constructor(private http: HttpClient) {}


  getItems() {
     return this.http.get<Item[]>(this.itemUrl);
  }

}
