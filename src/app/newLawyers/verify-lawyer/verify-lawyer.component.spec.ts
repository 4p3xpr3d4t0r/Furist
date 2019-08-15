import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyLawyerComponent } from './verify-lawyer.component';

describe('VerifyLawyerComponent', () => {
  let component: VerifyLawyerComponent;
  let fixture: ComponentFixture<VerifyLawyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyLawyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
