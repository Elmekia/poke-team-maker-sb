import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailStepperComponent } from './mail-stepper.component';

describe('MailStepperComponent', () => {
  let component: MailStepperComponent;
  let fixture: ComponentFixture<MailStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
