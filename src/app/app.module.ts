import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { YelpServiceService } from './yelp-service.service';
import {HttpClientModule} from '@angular/common/http';
import { InterceptorapiKey } from './apikey.interceptor';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
  useClass: InterceptorapiKey,
multi: true}, YelpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
