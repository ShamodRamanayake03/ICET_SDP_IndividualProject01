import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {

  constructor(private http:HttpClient){}

  public item:any={
    name:"",
    price:null,
    stock:null,
    image:""
  }

  addItem(){
    console.log(this.item);
    this.http.post("http://localhost:8080/item/add-item",this.item).subscribe(data=>{
      alert("Item Added")
    })
  }
}