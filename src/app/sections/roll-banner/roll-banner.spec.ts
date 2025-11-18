import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollBanner } from './roll-banner';

describe('RollBanner', () => {
  let component: RollBanner;
  let fixture: ComponentFixture<RollBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
