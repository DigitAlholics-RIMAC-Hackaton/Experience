import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pajes6Component } from './pajes6.component';

describe('Pajes6Component', () => {
  let component: Pajes6Component;
  let fixture: ComponentFixture<Pajes6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pajes6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pajes6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
