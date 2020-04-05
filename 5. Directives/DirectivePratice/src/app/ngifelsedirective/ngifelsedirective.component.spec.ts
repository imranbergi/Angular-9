import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGIFELSEDIRECTIVEComponent } from './ngifelsedirective.component';

describe('NGIFELSEDIRECTIVEComponent', () => {
  let component: NGIFELSEDIRECTIVEComponent;
  let fixture: ComponentFixture<NGIFELSEDIRECTIVEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGIFELSEDIRECTIVEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGIFELSEDIRECTIVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
