import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoCreateComponent } from './medicamento-create.component';

describe('MedicamentoCreateComponent', () => {
  let component: MedicamentoCreateComponent;
  let fixture: ComponentFixture<MedicamentoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
