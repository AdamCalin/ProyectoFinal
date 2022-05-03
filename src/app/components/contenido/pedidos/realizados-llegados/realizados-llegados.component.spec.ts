import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizadosLlegadosComponent } from './realizados-llegados.component';

describe('RealizadosLlegadosComponent', () => {
  let component: RealizadosLlegadosComponent;
  let fixture: ComponentFixture<RealizadosLlegadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizadosLlegadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizadosLlegadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
