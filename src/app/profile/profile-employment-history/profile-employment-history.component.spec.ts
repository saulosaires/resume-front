import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmploymentHistoryComponent } from './profile-employment-history.component';

describe('ProfileEmploymentHistoryComponent', () => {
  let component: ProfileEmploymentHistoryComponent;
  let fixture: ComponentFixture<ProfileEmploymentHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEmploymentHistoryComponent]
    });
    fixture = TestBed.createComponent(ProfileEmploymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
