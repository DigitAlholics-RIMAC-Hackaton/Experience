import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pajes8Component } from './pajes8.component';

describe('Pajes8Component', () => {
  let component: Pajes8Component;
  let fixture: ComponentFixture<Pajes8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pajes8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pajes8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
