import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamBoxComponent } from './cam-box.component';

describe('CamBoxComponent', () => {
  let component: CamBoxComponent;
  let fixture: ComponentFixture<CamBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
