import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsolidatedComponent } from './new-consolidated.component';

describe('NewConsolidatedComponent', () => {
  let component: NewConsolidatedComponent;
  let fixture: ComponentFixture<NewConsolidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConsolidatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConsolidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
