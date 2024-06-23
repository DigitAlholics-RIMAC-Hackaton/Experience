import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pajes4Component } from './pajes4.component';

describe('Pajes4Component', () => {
  let component: Pajes4Component;
  let fixture: ComponentFixture<Pajes4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pajes4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pajes4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
