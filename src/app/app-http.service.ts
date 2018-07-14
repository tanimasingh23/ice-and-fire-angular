import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//observable
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

import 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  public baseUrl = "https://www.anapioficeandfire.com/api";

  constructor(private _http: HttpClient) {
    console.log("HttpService called")
  }

  //exception handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //get all items (books,houses,characters)
  getAllItems(): any {
    return forkJoin(
      this._http.get(this.baseUrl + '/books'),
      this._http.get(this.baseUrl + '/characters'),
      this._http.get(this.baseUrl + '/houses')
    );
  }// end get all items

  //get books
  getBooks(): any {
    let myResponse = this._http.get(this.baseUrl + '/books');
    return myResponse;
  }//end get books

  //get characters
  getCharacters(): any {
    let myResponse = this._http.get(this.baseUrl + '/characters');
    return myResponse;
  }//end get characters

  //get houses
  getHouses(): any {
    let myResponse = this._http.get(this.baseUrl + '/houses');
    return myResponse;
  }// end get houses

  //get single item based upon selected item's url
  getSingleItem(url): any {
    let myResponse = this._http.get(url);
    return myResponse;
  }//end get single item
}
