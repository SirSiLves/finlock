import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarenausgangComponent } from './warenausgang.component';

describe('WarenausgangComponent', () => {
  let component: WarenausgangComponent;
  let fixture: ComponentFixture<WarenausgangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarenausgangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarenausgangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
