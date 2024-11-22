import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-order-detail',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-order.component.html',
  styleUrl: './manage-order.component.css'
})
export class ManageOrderComponent {
  public ordersList: any = [];
  public searchOrdersId: string = '';

  constructor(private http:HttpClient){
    this.loadTable(); 
  }

  loadTable(){
    this.http.get("http://localhost:8080/orders/find-all").subscribe(data=>{
      this.ordersList=data;
      console.log(data);
    })
  }

  deleteOrders(id:any){
    this.http.delete(`http://localhost:8080/orders/delete-orders/${id}`).subscribe(data=>{
      this.loadTable();
      alert("Orders Deleted");
    })
  }


  searchOrders() {
    if (this.searchOrdersId) {
      this.http.get(`http://localhost:8080/orders/search-orders/${this.searchOrdersId}`).subscribe(
        (data: any) => {
          if (data && Object.keys(data).length > 0) {
            
            this.ordersList = [data];
            alert("Orders Found");
          } else {
            
            this.ordersList = [];
            alert("Orders not found.");
          }
        },
        (error) => {
         
          console.error("Error searching orders", error);
          alert("Error searching orders.");
        }
      );
    } else {
      alert("Please enter a Orders ID to search.");
    }
  }
  

  public selectedOrders:any={};
  selectUpdateOrders(orders:any){
    console.log(orders);
    this.selectedOrders=orders 
  }

  saveOrders(){
    this.http.put("http://localhost:8080/orders/update-orders",this.selectedOrders).subscribe(data=>{
      alert("Orders Updated");
      this.loadTable();
    })
  }

}
