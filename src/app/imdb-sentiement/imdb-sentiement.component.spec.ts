import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbSentiementComponent } from './imdb-sentiement.component';

describe('ImdbSentiementComponent', () => {
  let component: ImdbSentiementComponent;
  let fixture: ComponentFixture<ImdbSentiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbSentiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbSentiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
