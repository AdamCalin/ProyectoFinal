import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosStockComponent } from './pedidos-stock.component';

describe('PedidosStockComponent', () => {
  let component: PedidosStockComponent;
  let fixture: ComponentFixture<PedidosStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
