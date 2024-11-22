import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-order-detail',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-order-detail.component.html',
  styleUrl: './manage-order-detail.component.css'
})
export class ManageOrderDetailComponent {
  public orderDetailList: any = [];
  public searchOrderDetailId: string = '';

  constructor(private http:HttpClient){
    this.loadTable(); 
  }

  loadTable(){
    this.http.get("http://localhost:8080/orderDetail/find-all").subscribe(data=>{
      this.orderDetailList=data;
      console.log(data);
    })
  }

  deleteOrderDetail(id:any){
    this.http.delete(`http://localhost:8080/orderDetail/delete-orderDetail/${id}`).subscribe(data=>{
      this.loadTable();
      alert("OrderDetail Deleted");
    })
  }


  searchOrderDetail() {
    if (this.searchOrderDetailId) {
      this.http.get(`http://localhost:8080/orderDetail/search-orderDetail/${this.searchOrderDetailId}`).subscribe(
        (data: any) => {
          if (data && Object.keys(data).length > 0) {
            
            this.orderDetailList = [data];
            alert("OrderDetail Found");
          } else {
            
            this.orderDetailList = [];
            alert("OrderDetail not found.");
          }
        },
        (error) => {
         
          console.error("Error searching orderDetail", error);
          alert("Error searching orderDetail.");
        }
      );
    } else {
      alert("Please enter a OrderDetail ID to search.");
    }
  }
  

  public selectedOrderDetail:any={};
  selectUpdateOrderDetail(orderDetail:any){
    console.log(orderDetail);
    this.selectedOrderDetail=orderDetail 
  }

  saveOrderDetail(){
    this.http.put("http://localhost:8080/orderDetail/update-orderDetail",this.selectedOrderDetail).subscribe(data=>{
      alert("OrderDetail Updated");
      this.loadTable();
    })
  }

}
