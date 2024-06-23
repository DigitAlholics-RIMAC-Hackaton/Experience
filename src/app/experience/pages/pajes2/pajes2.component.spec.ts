import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pajes2Component } from './pajes2.component';

describe('Pajes2Component', () => {
  let component: Pajes2Component;
  let fixture: ComponentFixture<Pajes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pajes2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pajes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
