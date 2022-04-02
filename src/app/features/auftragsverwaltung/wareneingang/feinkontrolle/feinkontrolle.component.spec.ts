import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeinkontrolleComponent } from './feinkontrolle.component';

describe('FeinkontrolleComponent', () => {
  let component: FeinkontrolleComponent;
  let fixture: ComponentFixture<FeinkontrolleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeinkontrolleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeinkontrolleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
