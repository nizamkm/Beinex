import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BankService {
  

  constructor(private http: HttpClient) { }

  getData(data:any){
    let baseUrl="https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
    return this.http.get(data)
  }

  
}
