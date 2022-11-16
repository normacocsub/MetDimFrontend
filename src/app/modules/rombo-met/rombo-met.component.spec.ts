import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomboMetComponent } from './rombo-met.component';

describe('RomboMetComponent', () => {
  let component: RomboMetComponent;
  let fixture: ComponentFixture<RomboMetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomboMetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomboMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
