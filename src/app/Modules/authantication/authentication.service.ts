import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../../appSettings';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,private app_settings:AppSettings) { }
  public signIn(data:any):Observable<any>{
    // return this.http.post(this.app_settings.MainApiPath+'SignUp/userSignUp',data); 
    return this.http.get('http://localhost:7100/api/SignUp/test') 
  }
}
