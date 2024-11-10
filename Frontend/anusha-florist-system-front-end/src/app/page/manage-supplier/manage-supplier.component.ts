import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-supplier',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-supplier.component.html',
  styleUrl: './manage-supplier.component.css'
})
export class ManageSupplierComponent {
  public supplierList: any = [];
  public searchSupplierId: string = '';

  constructor(private http:HttpClient){
    this.loadTable(); 
  }

  loadTable(){
    this.http.get("http://localhost:8080/supplier/find-all").subscribe(data=>{
      this.supplierList=data;
      console.log(data);
    })
  }

  deleteSupplier(id:any){
    this.http.delete(`http://localhost:8080/supplier/delete-supplier/${id}`).subscribe(data=>{
      this.loadTable();
      alert("Supplier Deleted");
    })
  }


  searchSupplier() {
    if (this.searchSupplierId) {
      this.http.get(`http://localhost:8080/supplier/search-supplier/${this.searchSupplierId}`).subscribe(
        (data: any) => {
          if (data && Object.keys(data).length > 0) {
            
            this.supplierList = [data];
            alert("Supplier Found");
          } else {
            
            this.supplierList = [];
            alert("Supplier not found.");
          }
        },
        (error) => {
         
          console.error("Error searching supplier", error);
          alert("Error searching supplier.");
        }
      );
    } else {
      alert("Please enter a Supplier ID to search.");
    }
  }
  

  public selectedSupplier:any={};
  selectUpdateSupplier(supplier:any){
    console.log(supplier);
    this.selectedSupplier=supplier 
  }

  saveSupplier(){
    this.http.put("http://localhost:8080/supplier/update-supplier",this.selectedSupplier).subscribe(data=>{
      alert("Supplier Updated");
      this.loadTable();
    })
  }

}