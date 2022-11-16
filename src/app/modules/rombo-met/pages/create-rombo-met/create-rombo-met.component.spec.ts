import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRomboMetComponent } from './create-rombo-met.component';

describe('CreateRomboMetComponent', () => {
  let component: CreateRomboMetComponent;
  let fixture: ComponentFixture<CreateRomboMetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRomboMetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRomboMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
