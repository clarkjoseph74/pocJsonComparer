import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseComparerComponent } from './response-comparer.component';

describe('ResponseComparerComponent', () => {
  let component: ResponseComparerComponent;
  let fixture: ComponentFixture<ResponseComparerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseComparerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponseComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
