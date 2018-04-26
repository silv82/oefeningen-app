import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Item } from "../../models/item.model";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  items: Item[] = [];

  @Output() showFinalList: EventEmitter<boolean> = new EventEmitter();

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
/*    this.items = [
      new Item(1, 'Komkommer', 5),
      new Item(2, 'Paprika'), 6,
    ];*/
  }

  addItem(txtItem) {
    let newID = this.items.length + 1;
    let newItem = new Item(newID , txtItem.value)
    this.items.push(newItem);
    localStorage.setItem(newID.toString(), JSON.stringify(newItem.name));
    this.itemService.Stream.next(txtItem);
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
