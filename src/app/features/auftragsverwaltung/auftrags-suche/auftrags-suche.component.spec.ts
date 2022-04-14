import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragsSucheComponent } from './auftrags-suche.component';

describe('AuftragsSucheComponent', () => {
  let component: AuftragsSucheComponent;
  let fixture: ComponentFixture<AuftragsSucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuftragsSucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragsSucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
