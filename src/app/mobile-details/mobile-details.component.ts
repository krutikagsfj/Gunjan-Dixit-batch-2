import { Component, OnInit } from '@angular/core';
import { MobileDataService } from '../services/mobile-data.service';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {
  
  //declaring variables for using in .ts file
  mobileData;
  id;
  name;
  price;

  column: string = "id";      //column variable
  order: boolean = true;      //order variable

  constructor(private bs:MobileDataService) { }

  ngOnInit() {this.bs.getMobileDetails().subscribe(res =>
    {
      this.mobileData=res;
    })
  }

  //function to delete Row
  deleteRow(i)
{
 let index = this.mobileData.indexOf(i);
 this.mobileData.splice(index,1);
}


//Sorting in asscending order
sortingRow(column) {

  if (this.column == column) {
    this.order = !this.order;
  } 
  
  else 
  {
    this.order = true;
    
    this.column = column;
  }
}
}
