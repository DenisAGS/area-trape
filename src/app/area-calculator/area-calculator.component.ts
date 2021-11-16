import { Component, OnInit } from '@angular/core';
import { area } from "../area-trapecio/area"

@Component({
  selector: 'app-area-calculator',
  templateUrl: './area-calculator.component.html',
  styleUrls: ['./area-calculator.component.css']
})
export class AreaCalculatorComponent implements OnInit {

  result;
  operator1 = 0;
  operator2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
