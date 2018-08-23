import { Component } from '@angular/core';
import { YelpServiceService } from './yelp-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private svc: YelpServiceService, private http: HttpClient) {

  }

  ngOnInit() {
    // this.svc.printToConsole("hi")

  }

}
