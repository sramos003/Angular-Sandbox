import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FeinDetailsService } from '../services/fein-details-service';

abstract class TestInterfaceComponent {
  getAppDetails: (value: any) => void;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //
  constructor(public httpClient: HttpClient) {
    let params = new HttpParams();
    params = params.set('businessUniqueId', '20220222170216');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.httpClient.get('http://localhost:8080/jpa/business/fein/getDetails', {headers, params}).subscribe(console.log);
  }
}
