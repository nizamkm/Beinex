import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchString: string | undefined;  
  public nativeBranch: any=[];
  private query:any={};
  bank_name:any;
  

  constructor(public bankService : BankService,private router:Router) {
    
  }

  ngOnInit(): void {this.query={
    '_bank_name_containss':''
  };
  this.getDatalist(data);

}
getDatalist(data:any){
  this.bankService.getData(data).subscribe((result:any)=>(
    if(result){
      console.log(result);
      this.nativeBranch=result;
    }
  ))
}




    
  

}


function data(data: any) {
  throw new Error('Function not implemented.');
}

