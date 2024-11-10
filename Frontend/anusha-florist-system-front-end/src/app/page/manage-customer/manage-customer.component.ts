import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-customer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-customer.component.html',
  styleUrl: './manage-customer.component.css'
})
export class ManageCustomerComponent {
  public customerList: any = [];
  public searchCustomerId: string = '';

  constructor(private http:HttpClient){
    this.loadTable(); 
  }

  loadTable(){
    this.http.get("http://localhost:8080/customer/find-all").subscribe(data=>{
      this.customerList=data;
      console.log(data);
    })
  }

  deleteCustomer(id:any){
    this.http.delete(`http://localhost:8080/customer/delete-customer/${id}`).subscribe(data=>{
      this.loadTable();
      alert("Customer Deleted");
    })
  }


  searchCustomer() {
    if (this.searchCustomerId) {
      this.http.get(`http://localhost:8080/customer/search-customer/${this.searchCustomerId}`).subscribe(
        (data: any) => {
          if (data && Object.keys(data).length > 0) {
            
            this.customerList = [data];
            alert("Customer Found");
          } else {
            
            this.customerList = [];
            alert("Customer not found.");
          }
        },
        (error) => {
         
          console.error("Error searching customer", error);
          alert("Error searching customer.");
        }
      );
    } else {
      alert("Please enter a Customer ID to search.");
    }
  }
  

  public selectedCustomer:any={};
  selectUpdateCustomer(customer:any){
    console.log(customer);
    this.selectedCustomer=customer 
  }

  saveCustomer(){
    this.http.put("http://localhost:8080/customer/update-customer",this.selectedCustomer).subscribe(data=>{
      alert("Customer Updated");
      this.loadTable();
    })
  }

}