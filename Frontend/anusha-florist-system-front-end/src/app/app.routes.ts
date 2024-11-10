import { Routes } from '@angular/router';
import { AddCustomerComponent } from './page/add-customer/add-customer.component';
import { ManageCustomerComponent } from './page/manage-customer/manage-customer.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
export const routes: Routes = [
    {
        path:"nav-bar",
        component:NavBarComponent
    },
    {
        path:"add-customer",
        component:AddCustomerComponent
    },
    {
        path:"manage-customer",
        component:ManageCustomerComponent
    }
];
