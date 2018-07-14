import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { AppHttpService } from '../app-http.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Location]
})
export class HomeComponent implements OnInit {
  allBooks: any;
  allCharacters: any;
  allHouses: any;
  data: any;
  allData: any[] = [];
  search: any = { url: '' };

  constructor(public _route: ActivatedRoute, router: Router, public appService: AppHttpService, private location: Location) {
    console.log("constructor is called");
  }

  ngOnInit() {
    this.appService.getAllItems().subscribe(
      data => {
        this.data = data;
        console.log(this.data);

        this.allBooks = data[0];
        //sort books in alphabetical order
        this.allBooks.sort(function (first, second) {
          const firstName = first.name.toLowerCase();
          const secondName = second.name.toLowerCase();
          //sort ascending
          if (firstName < secondName) {
            return -1;
          }
          if (firstName > secondName) {
            return 1;
          }
          //default
          return 0;
        });

        this.allCharacters = data[1];
        //sort characters in alphabetical order
        this.allCharacters.sort(function (first, second) {
          const firstName = first.name.toLowerCase();
          const secondName = second.name.toLowerCase();
          //sort ascending
          if (firstName < secondName) {
            return -1;
          }
          if (firstName > secondName) {
            return 1;
          }
          //default
          return 0;
        });

        this.allHouses = data[2];
        //sort houses in alphabetical order
        this.allHouses.sort(function (first, second) {
          const firstName = first.name.toLowerCase();
          const secondName = second.name.toLowerCase();
          //sort ascending
          if (firstName < secondName) {
            return -1;
          }
          if (firstName > secondName) {
            return 1;
          }
          //default
          return 0;
        });

        this.allData = this.allData.concat(this.allBooks, this.allCharacters, this.allHouses);
        console.log(this.allData);
      },

      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }
}



