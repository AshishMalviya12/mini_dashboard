import { Component, OnInit, Input } from '@angular/core';
import { AddComponent } from '../add.component';
@Component({
  selector: 'app-first-dynamic-comp',
  template: `
    <div class="job-ad">
      <h4>{{ data.headline }}</h4>
      {{ data.body }}
    </div>
  `,
  styles: [
    `
      .job-ad {
        border: 1px solid gray;
        padding: 5px;
        padding-bottom: 20px;
        padding-left: 20px;
        border-radius: 10px;
        background-color: lightblue;
        color: black;
      }
    `,
  ],
})
export class FirstDynamicCompComponent implements AddComponent {
  @Input() data: any;
}
