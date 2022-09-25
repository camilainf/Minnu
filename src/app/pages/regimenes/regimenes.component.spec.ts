import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimenesComponent } from './regimenes.component';

describe('RegimenesComponent', () => {
  let component: RegimenesComponent;
  let fixture: ComponentFixture<RegimenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegimenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegimenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
