import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingnewComponent } from './incomingnew.component';

describe('IncomingnewComponent', () => {
  let component: IncomingnewComponent;
  let fixture: ComponentFixture<IncomingnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
