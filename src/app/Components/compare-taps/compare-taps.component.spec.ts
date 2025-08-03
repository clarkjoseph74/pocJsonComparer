import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTapsComponent } from './compare-taps.component';

describe('CompareTapsComponent', () => {
  let component: CompareTapsComponent;
  let fixture: ComponentFixture<CompareTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareTapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompareTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
