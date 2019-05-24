import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinventoryComponent } from './stockinventory.component';

describe('StockinventoryComponent', () => {
  let component: StockinventoryComponent;
  let fixture: ComponentFixture<StockinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
