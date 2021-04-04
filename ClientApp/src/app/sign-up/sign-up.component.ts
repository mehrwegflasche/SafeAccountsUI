import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  private _http: HttpClient;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public signUpResponseStr: string = "";

  constructor(http: HttpClient) {
    this._http = http;
  }

  public SignUp(): void {
    var url: string = 'https://eus-safeaccounts-test.azurewebsites.net/' + 'users';
    var body: string = '"{\\"firstname\\":\\"Edwin\\", \\"lastname\\":\\"May\\", \\"email\\":\\"edwin@may.com\\", \\"password\\":\\"useless\\"}"';

    this._http.post<string>(url, body, { headers: this.headers }).subscribe(result => {
      this.signUpResponseStr = result["password"];
    }, error => console.error(error));
  }

  //public SignUp(): string {
  //  var url: string = 'https://eus-safeaccounts-test.azurewebsites.net/' + 'passwords/generate';
  //  var body: string = '"{\\"regex\\":\\"[a-zA-Z0-9]\\",\\"minLength\\":8,\\"maxLength\\":12}"';

  //  this._http.post<string>(url, body, { headers: this.headers }).subscribe(result => {
  //    this.signUpResponseStr = result["password"];
  //  }, error => console.error(error));
  //  return "";
  //}
}
