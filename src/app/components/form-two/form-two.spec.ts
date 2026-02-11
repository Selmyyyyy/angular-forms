import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwo } from './form-two';

describe('FormTwo', () => {
  let component: FormTwo;
  let fixture: ComponentFixture<FormTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
