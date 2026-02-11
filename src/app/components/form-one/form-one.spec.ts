import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOne } from './form-one';

describe('FormOne', () => {
  let component: FormOne;
  let fixture: ComponentFixture<FormOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
