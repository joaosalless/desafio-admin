import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoEditComponent } from './medicamento-edit.component';

describe('MedicamentoEditComponent', () => {
  let component: MedicamentoEditComponent;
  let fixture: ComponentFixture<MedicamentoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
