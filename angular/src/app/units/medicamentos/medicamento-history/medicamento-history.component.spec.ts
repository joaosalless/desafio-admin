import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoHistoryComponent } from './medicamento-history.component';

describe('MedicamentoHistoryComponent', () => {
  let component: MedicamentoHistoryComponent;
  let fixture: ComponentFixture<MedicamentoHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
