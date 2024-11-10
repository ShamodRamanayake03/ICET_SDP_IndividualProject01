import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-item',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-item.component.html',
  styleUrl: './manage-item.component.css'
})
export class ManageItemComponent {
  public itemList: any = [];
  public searchItemId: string = '';

  constructor(private http:HttpClient){
    this.loadTable(); 
  }

  loadTable(){
    this.http.get("http://localhost:8080/item/find-all").subscribe(data=>{
      this.itemList=data;
      console.log(data);
    })
  }

  deleteItem(id:any){
    this.http.delete(`http://localhost:8080/item/delete-item/${id}`).subscribe(data=>{
      this.loadTable();
      alert("Item Deleted");
    })
  }


  searchItem() {
    if (this.searchItemId) {
      this.http.get(`http://localhost:8080/item/search-item/${this.searchItemId}`).subscribe(
        (data: any) => {
          if (data && Object.keys(data).length > 0) {
            
            this.itemList = [data];
            alert("Item Found");
          } else {
            
            this.itemList = [];
            alert("Item not found.");
          }
        },
        (error) => {
         
          console.error("Error searching item", error);
          alert("Error searching item.");
        }
      );
    } else {
      alert("Please enter a Item ID to search.");
    }
  }
  

  public selectedItem:any={};
  selectUpdateItem(item:any){
    console.log(item);
    this.selectedItem=item 
  }

  saveItem(){
    this.http.put("http://localhost:8080/item/update-item",this.selectedItem).subscribe(data=>{
      alert("Item Updated");
      this.loadTable();
    })
  }

}