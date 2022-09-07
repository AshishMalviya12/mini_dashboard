import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDynamicCompComponent } from './second-dynamic-comp.component';

describe('SecondDynamicCompComponent', () => {
  let component: SecondDynamicCompComponent;
  let fixture: ComponentFixture<SecondDynamicCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDynamicCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDynamicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
