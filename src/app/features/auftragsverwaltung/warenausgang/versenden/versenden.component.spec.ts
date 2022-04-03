import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersendenComponent } from './versenden.component';

describe('VersendenComponent', () => {
  let component: VersendenComponent;
  let fixture: ComponentFixture<VersendenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersendenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersendenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
