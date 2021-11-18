import { Component, OnInit } from '@angular/core';
import { area } from '../calcularArea/area';

@Component({
  selector: 'app-area-calculator',
  templateUrl: './area-calculator.component.html',
  styleUrls: ['./area-calculator.component.css']
})
export class AreaCalculatorComponent implements OnInit {

  result;
  a = 0;
  b1 = 0;
  b2 = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  calcular_area(){
    let area_trapecio= new this.calcular_area();
    this.result = area_trapecio.area(this.a, this.b1,this.b2);
  } 

}
