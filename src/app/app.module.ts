import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CustomDirective } from './custom.directive';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { FilterPipe } from './filter.pipe';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import { ThirdRouteComponent } from './third-route/third-route.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FirstDynamicCompComponent } from './first-dynamic-comp/first-dynamic-comp.component';
import { SecondDynamicCompComponent } from './second-dynamic-comp/second-dynamic-comp.component';
import { AddingViewControllerDirective } from './adding-view-controller.directive';
import { ShowDynamicDataComponent } from './show-dynamic-data/show-dynamic-data.component';
import { HomeService } from './home.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThirdRouteComponent,
    CustomDirective,
    FilterPipe,
    SecondRouteComponent,
    FirstDynamicCompComponent,
    SecondDynamicCompComponent,
    AddingViewControllerDirective,
    ShowDynamicDataComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule, AgGridModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    NgbDatepickerModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
