import { async ,ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCalculatorComponent } from './area-calculator.component';

describe('AreaCalculatorComponent', () => {
  let component: AreaCalculatorComponent;
  let fixture: ComponentFixture<AreaCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call calcular.area  method', () => {
 
    let result;
    component.b1 = 3;
    component.b2 =6
    component.a = 8;

    component.calcular_area();
    result = component.area;

    expect(result).toBe(9);
 });
});
