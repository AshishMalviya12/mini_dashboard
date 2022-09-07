import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AddingItem } from './adding-Item';
import { FirstDynamicCompComponent } from './first-dynamic-comp/first-dynamic-comp.component';
import { SecondDynamicCompComponent } from './second-dynamic-comp/second-dynamic-comp.component';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  nextSubject = new Subject();
  constructor() {}
  getAds() {
    return [
      new AddingItem(SecondDynamicCompComponent, {
        name: 'Manager Info',
        bio: 'Lorem Ipsum is simply dummy text of the printing.',
      }),
      new AddingItem(SecondDynamicCompComponent, {
        name: 'Developer Info',
        bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      }),
      new AddingItem(FirstDynamicCompComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!',
      }),
      new AddingItem(FirstDynamicCompComponent, {
        headline: 'Openings in all departments',
        body: 'Apply today',
      }),
    ];
  }
}
