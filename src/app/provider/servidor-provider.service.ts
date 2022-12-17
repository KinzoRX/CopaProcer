import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidorProviderService {

  private urlBackend = "http://localhost:3000";

  httpHeadersJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  httpHeadersFormUrlencoded = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(private http: HttpClient) {}

  chamarBackendGet(uri: string):Observable<any> {
    return this.http.get<Object>(this.urlBackend + uri);
  }

  chamarBackendPost(uri: string, request: any):Observable<any> {
    console.log("POST URI: " + this.urlBackend + uri);
    console.log("Request: " + JSON.stringify(request));
    return this.http.post<Object>(this.urlBackend + uri, request, this.httpHeadersJson);
  }

  chamarBackendPut(uri: string, request: any):Observable<any> {
    console.log("PUT URI: " + this.urlBackend + uri);
    console.log("Request: " + JSON.stringify(request));
    return this.http.put<Object>(this.urlBackend + uri, request, this.httpHeadersJson);
  }

  chamarBackendDelete(uri: string, request: any):Observable<any> {
    return this.http.delete<Object>(this.urlBackend + uri, request);
  }
}
