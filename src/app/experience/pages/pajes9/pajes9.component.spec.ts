import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pajes9Component } from './pajes9.component';

describe('Pajes9Component', () => {
  let component: Pajes9Component;
  let fixture: ComponentFixture<Pajes9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pajes9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pajes9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
