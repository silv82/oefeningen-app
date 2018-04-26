import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boodschappenlijst';
  showFinalList = false;
  newItems: string[];
  newItem: string;

  ngOnInit(){
/*    if (localStorage.getItem('1')) {
      console.log("gevuld");
      }*/

      if(localStorage.length >= 1) {}
        for(let i = 0; i < localStorage.length; i++) {
        this.newItem = localStorage.getItem(localStorage.key(i));
        console.log(localStorage.key(i));
        //this.newItems.push(this.newItem);
      }
    }




}

