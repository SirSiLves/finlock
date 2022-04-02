import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinlagerungComponent } from './einlagerung.component';

describe('EinlagerungComponent', () => {
  let component: EinlagerungComponent;
  let fixture: ComponentFixture<EinlagerungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinlagerungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinlagerungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
