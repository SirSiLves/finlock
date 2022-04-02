import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragslisteDetailsComponent } from './auftragsliste-details.component';

describe('AuftragslisteDetailsComponent', () => {
  let component: AuftragslisteDetailsComponent;
  let fixture: ComponentFixture<AuftragslisteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuftragslisteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragslisteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
