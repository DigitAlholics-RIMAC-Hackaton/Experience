import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pajes7Component } from './pajes7.component';

describe('Pajes7Component', () => {
  let component: Pajes7Component;
  let fixture: ComponentFixture<Pajes7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pajes7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pajes7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
