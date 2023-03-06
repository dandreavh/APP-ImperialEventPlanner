import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaDivisorRojoComponent } from './linea-divisor-rojo.component';

describe('LineaDivisorRojoComponent', () => {
  let component: LineaDivisorRojoComponent;
  let fixture: ComponentFixture<LineaDivisorRojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaDivisorRojoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaDivisorRojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});