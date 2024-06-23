import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pajes1Component } from './pajes1.component';

describe('Pajes1Component', () => {
  let component: Pajes1Component;
  let fixture: ComponentFixture<Pajes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pajes1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pajes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
