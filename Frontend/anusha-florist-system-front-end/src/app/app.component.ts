import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomerComponent } from './page/add-customer/add-customer.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { ManageCustomerComponent } from './page/manage-customer/manage-customer.component';
import { AddSupplierComponent } from './page/add-supplier/add-supplier.component';
import { ManageSupplierComponent } from './page/manage-supplier/manage-supplier.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddCustomerComponent,NavBarComponent,ManageCustomerComponent,AddSupplierComponent,ManageSupplierComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anusha-florist-system-front-end';
}
