import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGIFELSETHENDIRECTIVEComponent } from './ngifelsethendirective.component';

describe('NGIFELSETHENDIRECTIVEComponent', () => {
  let component: NGIFELSETHENDIRECTIVEComponent;
  let fixture: ComponentFixture<NGIFELSETHENDIRECTIVEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGIFELSETHENDIRECTIVEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGIFELSETHENDIRECTIVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
