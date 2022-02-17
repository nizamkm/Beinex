import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder} from '@angular/forms';




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
    
    // console.log('Home component constructor is called');
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




    // console.log('Home component onIniti called');

    //   this.bankService.getData().subscribe(
    //     (         data: any)=>{
    //         console.log('logging data');
    //         console.log(data);
    //         this.nativeBranch = data;
    //         console.log(this.nativeBranch)
    //      },
    //     (         error: { errorMessage: any; })=>{
    //         console.log('Some error occured');
    //         console.log(error.errorMessage);
    //      }
    //   )
  

}


function data(data: any) {
  throw new Error('Function not implemented.');
}

