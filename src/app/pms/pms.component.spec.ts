import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsComponent } from './pms.component';

describe('PmsComponent', () => {
  let component: PmsComponent;
  let fixture: ComponentFixture<PmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
