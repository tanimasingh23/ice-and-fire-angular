import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule,Routes} from '@angular/router'
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AppHttpService } from "./app-http.service";
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleViewComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path: 'view/:url', component:SingleViewComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  exports :[
    RouterModule
  ],
  providers: [AppHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
