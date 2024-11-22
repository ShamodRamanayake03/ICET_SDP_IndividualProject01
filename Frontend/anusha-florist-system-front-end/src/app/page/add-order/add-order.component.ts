import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-orders',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css'
})
export class AddOrderComponent {

  constructor(private http:HttpClient, private router: Router){}

  public orders:any={
    id:null,
    name:"",
    date:"",
    fprice:null
  }

  addOrder(){
    console.log(this.orders);
    this.http.post("http://localhost:8080/orders/add-orders",this.orders).subscribe(data=>{
      alert("Order Added")
    })
  }
  addItem() {
    if (this.orders.id) {
      
      this.router.navigate(['/add-order-detail', this.orders.id]);
    } else {
      alert('Order ID is required before adding items!');
    }
  }
}