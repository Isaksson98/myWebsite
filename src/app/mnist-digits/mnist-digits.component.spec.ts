import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnistDigitsComponent } from './mnist-digits.component';

describe('MnistDigitsComponent', () => {
  let component: MnistDigitsComponent;
  let fixture: ComponentFixture<MnistDigitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnistDigitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnistDigitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
