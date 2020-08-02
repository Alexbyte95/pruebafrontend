import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndividualComponent } from './card-individual.component';

describe('CardIndividualComponent', () => {
  let component: CardIndividualComponent;
  let fixture: ComponentFixture<CardIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
