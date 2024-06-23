import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pajes5Component } from './pajes5.component';

describe('Pajes5Component', () => {
  let component: Pajes5Component;
  let fixture: ComponentFixture<Pajes5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pajes5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pajes5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
