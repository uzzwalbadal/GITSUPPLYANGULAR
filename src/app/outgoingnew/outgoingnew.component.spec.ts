import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingnewComponent } from './outgoingnew.component';

describe('OutgoingnewComponent', () => {
  let component: OutgoingnewComponent;
  let fixture: ComponentFixture<OutgoingnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgoingnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
