import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Autorizacion } from '../models/autorizacion';

@Injectable()
export class ServiceEmpleados {
  constructor(private _http: HttpClient) {}

  autorizar(autorizar: Autorizacion): Observable<any> {
    var json = JSON.stringify(autorizar);
    var header = new HttpHeaders();
    header = header.set('content-type', 'application/json');
    var request = 'auth/login';
    var url = environment.urlApiEmpleados + request;

    return this._http.post(url, json, { headers: header });
  }

  getEmpleados(): Observable<any> {
    var header = new HttpHeaders();
    header = header.set('Authorization', 'bearer '+environment.token);
    var request = 'api/empleados';
    var url = environment.urlApiEmpleados + request;
    return this._http.get(url, { headers: header });
  }
}
