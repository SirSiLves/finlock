import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpackenComponent } from './verpacken.component';

describe('VerpackenComponent', () => {
  let component: VerpackenComponent;
  let fixture: ComponentFixture<VerpackenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpackenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpackenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
