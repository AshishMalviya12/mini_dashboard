import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AddComponent } from '../add.component';
import { AddingItem } from '../adding-Item';
import { AddingViewControllerDirective } from '../adding-view-controller.directive';
@Component({
  selector: 'app-show-dynamic-data',
  template: `
    <div>
      <div class="ad-banner-example">
        <h3 class="dynamicTitle">Dynamic Component</h3>
        <ng-template adHost></ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      .dynamicTitle {
        text-align: center;
        font-size: 20px;
        font-family: system-ui;
        font-weight: 600;
        margin-top: 5px;
      }
    `,
  ],
})
export class ShowDynamicDataComponent implements OnInit {
  @Input() ads: AddingItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AddingViewControllerDirective, { static: true })
  adHost!: AddingViewControllerDirective;
  interval: any;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AddComponent>(
      adItem.component
    );
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1000);
  }
}
