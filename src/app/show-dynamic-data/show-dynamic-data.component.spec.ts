import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDynamicDataComponent } from './show-dynamic-data.component';

describe('ShowDynamicDataComponent', () => {
  let component: ShowDynamicDataComponent;
  let fixture: ComponentFixture<ShowDynamicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDynamicDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDynamicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
