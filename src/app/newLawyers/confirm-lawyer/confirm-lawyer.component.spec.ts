import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLawyerComponent } from './confirm-lawyer.component';

describe('ConfirmLawyerComponent', () => {
  let component: ConfirmLawyerComponent;
  let fixture: ComponentFixture<ConfirmLawyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmLawyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
