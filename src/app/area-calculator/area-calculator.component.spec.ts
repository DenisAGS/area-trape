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
    component.a = 2;
    component.b1 = 4;
    component.b2 =6

    component.calcular_area();
    result = component.result;

    expect(result).toBe(10);
  });
});
