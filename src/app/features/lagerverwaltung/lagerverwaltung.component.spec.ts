import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagerverwaltungComponent } from './lagerverwaltung.component';

describe('LagerverwaltungComponent', () => {
  let component: LagerverwaltungComponent;
  let fixture: ComponentFixture<LagerverwaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagerverwaltungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagerverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
