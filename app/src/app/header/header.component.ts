import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Model } from '../models/model';
import { Models } from '../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output()  Sale = new EventEmitter <any>();
nav:Model[]=Models;

isSelected?;
isSelectedActive;

forSaleComponent:boolean=true;

navActive(item){




this.isSelected =item;
this.isSelectedActive=item;
console.log(this.isSelected , this.isSelectedActive)


}


remove(){


   this.isSelected=false;

 this.isSelectedActive=false;

}




forSale(item){


this.Sale.emit(item)
this.isSelectedActive=false;


}






  constructor() { }

  ngOnInit(): void {


this.isSelected=''
// this.isSelectedActive='true'




  }

}
