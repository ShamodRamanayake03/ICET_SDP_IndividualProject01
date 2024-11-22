import { Routes } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddCustomerComponent } from './page/add-customer/add-customer.component';
import { ManageCustomerComponent } from './page/manage-customer/manage-customer.component';
import { AddSupplierComponent } from './page/add-supplier/add-supplier.component';
import { ManageSupplierComponent } from './page/manage-supplier/manage-supplier.component';
import { AddItemComponent } from './page/add-item/add-item.component';
import { ManageItemComponent } from './page/manage-item/manage-item.component';
import { AddOrderDetailComponent } from './page/add-order-detail/add-order-detail.component';
import { ManageOrderDetailComponent } from './page/manage-order-detail/manage-order-detail.component';
import { AddOrderComponent } from './page/add-order/add-order.component';
import { ManageOrderComponent } from './page/manage-order/manage-order.component';

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
    },
    {
        path:"add-item",
        component:AddItemComponent
    },
    {
        path:"manage-item",
        component:ManageItemComponent
    },
    {
        path: "add-order-detail/:orderId", 
        component: AddOrderDetailComponent
    }
    ,
    {
        path:"manage-order-detail",
        component:ManageOrderDetailComponent
    },
    {
        path:"add-order",
        component:AddOrderComponent
    },
    {
        path:"manage-order",
        component:ManageOrderComponent
    }

];
