import { Models } from './models/models';
import { Component} from '@angular/core';

import { Model } from './models/model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent{

  selectedComponent?;
 

 forSale(item){



this.selectedComponent=item;

console.log(this.selectedComponent)


 }


}
