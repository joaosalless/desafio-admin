import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoFormComponent } from './medicamento-form.component';

describe('MedicamentoFormComponent', () => {
  let component: MedicamentoFormComponent;
  let fixture: ComponentFixture<MedicamentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
