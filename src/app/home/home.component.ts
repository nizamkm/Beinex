import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchString: string | undefined;  
  public nativeBranch: any;

  constructor(public bankService : BankService) {
    console.log('Home component constructor is called');
  }

  ngOnInit(): void {
    console.log('Home component onIniti called');

      this.bankService.getData().subscribe(
        (         data: any)=>{
            console.log('logging data');
            console.log(data);
            this.nativeBranch = data;
            console.log(this.nativeBranch)
         },
        (         error: { errorMessage: any; })=>{
            console.log('Some error occured');
            console.log(error.errorMessage);
         }
      )
  }

}
