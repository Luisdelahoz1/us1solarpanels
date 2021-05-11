import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailchimpComponent } from './mailchimp.component';

describe('MailchimpComponent', () => {
  let component: MailchimpComponent;
  let fixture: ComponentFixture<MailchimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailchimpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailchimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
