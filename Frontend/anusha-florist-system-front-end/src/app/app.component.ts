import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomerComponent } from './page/add-customer/add-customer.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { ManageCustomerComponent } from './page/manage-customer/manage-customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddCustomerComponent,NavBarComponent,ManageCustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anusha-florist-system-front-end';
}
