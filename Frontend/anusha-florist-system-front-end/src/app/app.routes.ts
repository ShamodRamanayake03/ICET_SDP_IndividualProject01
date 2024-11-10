import { Routes } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddCustomerComponent } from './page/add-customer/add-customer.component';
import { ManageCustomerComponent } from './page/manage-customer/manage-customer.component';
import { AddSupplierComponent } from './page/add-supplier/add-supplier.component';
import { ManageSupplierComponent } from './page/manage-supplier/manage-supplier.component';

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
    },
    {
        path:"add-supplier",
        component:AddSupplierComponent
    },
    {
        path:"manage-supplier",
        component:ManageSupplierComponent
    }

];
