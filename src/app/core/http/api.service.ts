import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "@env";
import {CoreModule} from "@core/core.module";

@Injectable({
  providedIn: CoreModule
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  get<T>(path: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(this.apiUrl + path, {params, headers, withCredentials: true})
  }

}
