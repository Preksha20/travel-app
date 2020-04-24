import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristattractionComponent } from './touristattraction.component';

describe('TouristattractionComponent', () => {
  let component: TouristattractionComponent;
  let fixture: ComponentFixture<TouristattractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristattractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristattractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
