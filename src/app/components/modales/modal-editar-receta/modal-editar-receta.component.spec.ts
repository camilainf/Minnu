import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarRecetaComponent } from './modal-editar-receta.component';

describe('ModalEditarRecetaComponent', () => {
  let component: ModalEditarRecetaComponent;
  let fixture: ComponentFixture<ModalEditarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarRecetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
