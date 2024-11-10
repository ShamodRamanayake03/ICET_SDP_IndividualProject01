import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  constructor(private http:HttpClient){}

  public customer:any={
    name:"",
    contact:"",
    nic:""
  }

  addCustomer(){
    console.log(this.customer);
    this.http.post("http://localhost:8080/customer/add-customer",this.customer).subscribe(data=>{
      alert("Customer Added")
    })
  }
}