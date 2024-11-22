import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-order-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-order-detail.component.html',
  styleUrls: ['./add-order-detail.component.css'],
})
export class AddOrderDetailComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {} 

  public itemId: string = '';
  public qty: number = 0;
  public unitPrice: number = 0;
  public totalPrice: number = 0;

  public item: any = {
    name: '',
    stock: 0,
    price: 0,
  };

  public orderDetail: any = {
    itemId: null,
    name: '',
    stock: null,
    qty: null,
    unitPrice: null,
    totalPrice: null,
    orderId: null,
  };

  addOrderDetail() {
    this.orderDetail = {
      itemId: this.itemId,
      name: this.item.name,
      stock: this.item.stock,
      qty: this.qty,
      unitPrice: this.item.price,
      totalPrice: this.totalPrice,
      orderId: this.orderDetail.orderId,
    };

    this.http.post('http://localhost:8080/orderDetail/add-orderDetail', this.orderDetail).subscribe(
      () => {
        alert('OrderDetail Added Successfully');
        this.resetForm();
      },
      (error) => {
        console.error('Error adding order detail', error);
        alert('Failed to add OrderDetail');
      }
    );
  }

  resetForm() {
    const retainedOrderId = this.orderDetail.orderId;
    this.itemId = '';
    this.qty = 0;
    this.unitPrice = 0;
    this.totalPrice = 0;
    this.item = {
      name: '',
      stock: 0,
      price: 0,
    };
    this.orderDetail = {
      itemId: null,
      name: '',
      stock: null,
      qty: null,
      unitPrice: null,
      totalPrice: null,
      orderId: retainedOrderId,
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const orderId = params.get('orderId');
      if (orderId) {
        this.orderDetail.orderId = orderId; 
        console.error('Order ID not found in route parameters!');
      }
    });
  }

  loadItemData() {
    if (this.itemId) {
      this.http.get(`http://localhost:8080/item/search-item/${this.itemId}`).subscribe(
        (data: any) => {
          if (data) {
            this.item = data;
            this.unitPrice = this.item.price;
            this.orderDetail.name = this.item.name;
            this.orderDetail.stock = this.item.stock;
            this.calculateTotalPrice();
          } else {
            this.item = { name: '', stock: 0, price: 0 };
          }
        },
        (error) => {
          console.error('Error loading item data', error);
          this.item = { name: '', stock: 0, price: 0 };
        }
      );
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.qty * this.unitPrice;
    this.orderDetail.totalPrice = this.totalPrice;
  }

  
  

  
}
