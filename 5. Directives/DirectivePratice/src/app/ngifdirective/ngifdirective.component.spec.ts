import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGIFDIRECTIVEComponent } from './ngifdirective.component';

describe('NGIFDIRECTIVEComponent', () => {
  let component: NGIFDIRECTIVEComponent;
  let fixture: ComponentFixture<NGIFDIRECTIVEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGIFDIRECTIVEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGIFDIRECTIVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
