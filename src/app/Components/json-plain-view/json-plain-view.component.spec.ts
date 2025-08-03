import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPlainViewComponent } from './json-plain-view.component';

describe('JsonPlainViewComponent', () => {
  let component: JsonPlainViewComponent;
  let fixture: ComponentFixture<JsonPlainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPlainViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonPlainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
