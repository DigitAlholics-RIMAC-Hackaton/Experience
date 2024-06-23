import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pajes3Component } from './pajes3.component';

describe('Pajes3Component', () => {
  let component: Pajes3Component;
  let fixture: ComponentFixture<Pajes3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pajes3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pajes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
