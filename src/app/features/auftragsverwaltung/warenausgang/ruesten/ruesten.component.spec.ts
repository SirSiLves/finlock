import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuestenComponent } from './ruesten.component';

describe('RuestenComponent', () => {
  let component: RuestenComponent;
  let fixture: ComponentFixture<RuestenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuestenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuestenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
