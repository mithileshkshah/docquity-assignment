import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarCardComponent } from './webinar-card.component';

describe('WebinarCardComponent', () => {
  let component: WebinarCardComponent;
  let fixture: ComponentFixture<WebinarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarCardComponent]
    });
    fixture = TestBed.createComponent(WebinarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
