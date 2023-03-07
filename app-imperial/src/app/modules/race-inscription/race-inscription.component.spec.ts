import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceInscriptionComponent } from './race-inscription.component';

describe('RaceInscriptionComponent', () => {
  let component: RaceInscriptionComponent;
  let fixture: ComponentFixture<RaceInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
