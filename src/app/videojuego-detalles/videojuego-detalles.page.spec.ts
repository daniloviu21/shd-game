import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideojuegoDetallesPage } from './videojuego-detalles.page';

describe('VideojuegoDetallesPage', () => {
  let component: VideojuegoDetallesPage;
  let fixture: ComponentFixture<VideojuegoDetallesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
