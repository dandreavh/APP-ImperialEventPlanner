import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHComponent } from './card-h.component';

describe('CardHComponent', () => {
  let component: CardHComponent;
  let fixture: ComponentFixture<CardHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
