import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoViewSwitchComponent } from './medicamento-view-switch.component';

describe('MedicamentoViewSwitchComponent', () => {
  let component: MedicamentoViewSwitchComponent;
  let fixture: ComponentFixture<MedicamentoViewSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoViewSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoViewSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
