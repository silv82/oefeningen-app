import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Item } from "../../models/item.model";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  items: Item[] = [];

  @Output()
  showFinalList: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
/*    this.items = [
      new Item(1, 'Komkommer'),
      new Item(2, 'Paprika'),
    ];*/
  }

  addItem(txtItem) {
    let newID = this.items.length + 1;
    let newItem = new Item(newID , txtItem.value)
    this.items.push(newItem);
    txtItem.value = '';
  }

  disableButton() {
    if (this.items.length >= 10) {
      return true;
    }
  }

  showFinalClick(){
    this.showFinalList.emit(true);
  }

}
