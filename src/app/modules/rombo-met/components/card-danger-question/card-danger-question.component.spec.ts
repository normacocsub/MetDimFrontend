import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDangerQuestionComponent } from './card-danger-question.component';

describe('CardDangerQuestionComponent', () => {
  let component: CardDangerQuestionComponent;
  let fixture: ComponentFixture<CardDangerQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDangerQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDangerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
