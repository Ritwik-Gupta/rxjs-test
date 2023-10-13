import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableFromScratchComponent } from './observable-from-scratch.component';

describe('ObservableFromScratchComponent', () => {
  let component: ObservableFromScratchComponent;
  let fixture: ComponentFixture<ObservableFromScratchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableFromScratchComponent]
    });
    fixture = TestBed.createComponent(ObservableFromScratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
