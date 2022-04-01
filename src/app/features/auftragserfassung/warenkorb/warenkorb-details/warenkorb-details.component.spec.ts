import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarenkorbDetailsComponent } from './warenkorb-details.component';

describe('WarenkorbDetailsComponent', () => {
  let component: WarenkorbDetailsComponent;
  let fixture: ComponentFixture<WarenkorbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarenkorbDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarenkorbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
