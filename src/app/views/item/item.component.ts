import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  newitem:item;

  isActive=true;
  isEnable=false;

  constructor() {
    console.log("constructor ran..");
  }

  ngOnInit() {
    console.log("ngOnInit ran..");
  }

}

class item {
  itId: number;
  itName: String;
  itPrice: number;
}
