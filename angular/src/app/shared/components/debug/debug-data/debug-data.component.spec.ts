import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugDataComponent } from './debug-data.component';

describe('DebugDataComponent', () => {
  let component: DebugDataComponent;
  let fixture: ComponentFixture<DebugDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
