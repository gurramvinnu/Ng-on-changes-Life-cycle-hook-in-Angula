import { Component ,OnChanges,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges{

  @Input() cdata:any

   constructor(){}

 ngOnChanges(changes: SimpleChanges): void {
   
  console.log("onchanges call")
  console.log(changes)
}
} 