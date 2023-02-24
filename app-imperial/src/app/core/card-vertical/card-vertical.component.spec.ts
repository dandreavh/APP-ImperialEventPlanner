import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVerticalComponent } from './card-vertical.component';

describe('CardVerticalComponent', () => {
  let component: CardVerticalComponent;
  let fixture: ComponentFixture<CardVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
