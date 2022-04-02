import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragsverwaltungComponent } from './auftragsverwaltung.component';

describe('AuftragsverwaltungComponent', () => {
  let component: AuftragsverwaltungComponent;
  let fixture: ComponentFixture<AuftragsverwaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuftragsverwaltungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragsverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
