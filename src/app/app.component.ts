import { Component } from '@angular/core';
import { BankService } from './bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bankbranches';
  data=[]
  constructor(private user:BankService){
    this.user.getData().subscribe((data: any)=>{
      console.log(data)
      this.data=data
    })
  }
}
