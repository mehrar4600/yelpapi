import { Component, OnInit } from '@angular/core';
import { YelpServiceService } from '../yelp-service.service';
import { HttpClient } from '@angular/common/http';
import { InterceptorapiKey } from '../apikey.interceptor';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  restaurent=[]

  constructor(private svc: YelpServiceService, private http: HttpClient) {
    // svc.printToConsole();
    
  }

  ngOnInit() {

  }

  submit() {
    console.log(this.svc.printToConsole())
  //   .subscribe(response => {console.log(response);
  // })
}
}