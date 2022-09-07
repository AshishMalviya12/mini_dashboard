import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDynamicCompComponent } from './first-dynamic-comp.component';

describe('FirstDynamicCompComponent', () => {
  let component: FirstDynamicCompComponent;
  let fixture: ComponentFixture<FirstDynamicCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDynamicCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDynamicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
