import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoListTableComponent } from './medicamento-list-table.component';

describe('MedicamentoListTableComponent', () => {
  let component: MedicamentoListTableComponent;
  let fixture: ComponentFixture<MedicamentoListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
