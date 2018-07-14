import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css'],
  providers: [Location]
})

export class SingleViewComponent implements OnInit {
  public currentItem: any;
  public currentItemUrl: any;
  constructor(public _route:ActivatedRoute,router:Router,public appService:AppHttpService,private location:Location) {
    console.log("constructor is called");
   }

  ngOnInit() {
    let myUrl = this._route.snapshot.paramMap.get('url');
    console.log(myUrl)
    this.appService.getSingleItem(myUrl).subscribe(

      data => {
        console.log(myUrl);
        this.currentItem = data;
        this.currentItemUrl = myUrl;
        console.log(this.currentItem);
      },
      
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

  goBackToPreviousPage(): any {

    this.location.back();

  }
}
