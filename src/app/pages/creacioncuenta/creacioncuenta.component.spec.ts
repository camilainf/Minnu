import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacioncuentaComponent } from './creacioncuenta.component';

describe('CreacioncuentaComponent', () => {
  let component: CreacioncuentaComponent;
  let fixture: ComponentFixture<CreacioncuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacioncuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacioncuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
