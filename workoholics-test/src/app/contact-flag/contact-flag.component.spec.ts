import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFlagComponent } from './contact-flag.component';

describe('ContactFlagComponent', () => {
  let component: ContactFlagComponent;
  let fixture: ComponentFixture<ContactFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFlagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
