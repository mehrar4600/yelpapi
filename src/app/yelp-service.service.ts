import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InterceptorapiKey } from './apikey.interceptor';
const url = "https://api.yelp.com"
@Injectable()
export class YelpServiceService {

  constructor(private https: HttpClient) { }

  printToConsole() {
    // console.log("hello");
    this.https.get(`https://api.yelp.com/v3/businesses/search?location=Chelsea, New York`)

    // return this.https.get(`/businesses/search`)
  }

}
