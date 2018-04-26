import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item.model";


@Component({
  selector: 'app-final-list',
  templateUrl: './final-list.component.html',
  styleUrls: ['./final-list.component.css']
})
export class FinalListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(itemData => {
        this.items = itemData;})

    this.itemService.Stream
      .subscribe(
        (item:Item) => this.addFinalList(item));

  }

  addFinalList(item:Item){
  }

}
