import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InterceptorapiKey implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //   // add the header to the cloned request
    //   const authReq = req.clone(
    //     { headers: req.headers.set("Authorization","Bearer 3zIh2zjHte5iARTVDxDRH9WCN3rU-oN4cXrQzynqA6YcO0vjWpUvmhHd3eytAsLnWXUD9Gxkn6zqQf0GAdC6Luye9FD1ig5v0MJrO262S3UHm29iSGJViZOPPq59W3Yx", )})    

    //   return next.handle(authReq);
    // var request = require("request");

const authHeaders = req.clone({
  headers:req.headers.set(
    
    // 'Postman-Token': 'e1fadff7-ced4-46f7-aaee-8bb9e81a520e',
    //  'Cache-Control': 'no-cache',
     'Authorization', 'Bearer 3zIh2zjHte5iARTVDxDRH9WCN3rU-oN4cXrQzynqA6YcO0vjWpUvmhHd3eytAsLnWXUD9Gxkn6zqQf0GAdC6Luye9FD1ig5v0MJrO262S3UHm29iSGJViZOPPq59W3Yx'
  )
})
return next.handle(authHeaders)

  //   const authReq = {
  //     method: 'GET',
  //     url: 'https://api.yelp.com/v3/businesses/search',
  //     qs: { location: 'Chelsea,%20New%20York' },
  //     headers:
  //     {
  //       'Postman-Token': 'e1fadff7-ced4-46f7-aaee-8bb9e81a520e',
  //       'Cache-Control': 'no-cache',
  //       Authorization: 'Bearer 3zIh2zjHte5iARTVDxDRH9WCN3rU-oN4cXrQzynqA6YcO0vjWpUvmhHd3eytAsLnWXUD9Gxkn6zqQf0GAdC6Luye9FD1ig5v0MJrO262S3UHm29iSGJViZOPPq59W3Yx'
  //     }
  //   };

  //   return next.handle(authReq)
  // };
}

}

