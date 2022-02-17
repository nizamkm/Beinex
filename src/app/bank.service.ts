import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BankService {
  // getBankBranches() {
  //   throw new Error('Method not implemented.');
  // }
  // baseUrl: string | undefined;
  // myCity: string | undefined;
  // private baseUrl= "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
  // public myCity= "MUMBAI"

  constructor(private http: HttpClient) { }

  getData(data:any){
    let baseUrl="https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
    return this.http.get(data)
  }

  // private handleError(err: HttpErrorResponse) {
  //   console.log('Handle http error');
  //   console.log(err.message);
  //   return Observable.throw(err.message);
  // }

  // public getBankBranches(): any {
  //   let myResponse = this.http.get(this.baseUrl + '?city=' +
  //     this.myCity);
  //   console.log(myResponse);
  //   return myResponse;
  // }
}
