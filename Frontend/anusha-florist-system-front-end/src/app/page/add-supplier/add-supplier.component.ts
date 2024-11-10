import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent {

  constructor(private http:HttpClient){}

  public supplier:any={
    name:"",
    contact:"",
    nic:""
  }

  addSupplier(){
    console.log(this.supplier);
    this.http.post("http://localhost:8080/supplier/add-supplier",this.supplier).subscribe(data=>{
      alert("Supplier Added")
    })
  }
}