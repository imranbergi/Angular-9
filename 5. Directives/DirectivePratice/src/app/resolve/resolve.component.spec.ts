import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RESOLVEComponent } from './resolve.component';

describe('RESOLVEComponent', () => {
  let component: RESOLVEComponent;
  let fixture: ComponentFixture<RESOLVEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RESOLVEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RESOLVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
