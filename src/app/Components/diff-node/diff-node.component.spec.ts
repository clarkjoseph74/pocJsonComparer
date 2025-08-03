import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffNodeComponent } from './diff-node.component';

describe('DiffNodeComponent', () => {
  let component: DiffNodeComponent;
  let fixture: ComponentFixture<DiffNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiffNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
