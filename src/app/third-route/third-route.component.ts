import { Component, OnInit } from '@angular/core';
import { AddingItem } from '../adding-Item';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-third-route',
  templateUrl: './third-route.component.html',
  styleUrls: ['./third-route.component.scss'],
})
export class ThirdRouteComponent implements OnInit {
  ads: AddingItem[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.ads = this.homeService.getAds();
  }
}
