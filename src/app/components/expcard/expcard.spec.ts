import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expcard } from './expcard';

describe('Expcard', () => {
  let component: Expcard;
  let fixture: ComponentFixture<Expcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
