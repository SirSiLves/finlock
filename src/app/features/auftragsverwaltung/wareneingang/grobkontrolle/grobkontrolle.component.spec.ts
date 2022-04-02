import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrobkontrolleComponent } from './grobkontrolle.component';

describe('GrobkontrolleComponent', () => {
  let component: GrobkontrolleComponent;
  let fixture: ComponentFixture<GrobkontrolleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrobkontrolleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrobkontrolleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
