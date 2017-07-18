import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoListComponent } from './medicamento-list.component';

describe('MedicamentoListComponent', () => {
  let component: MedicamentoListComponent;
  let fixture: ComponentFixture<MedicamentoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
