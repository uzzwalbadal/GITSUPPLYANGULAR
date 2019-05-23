import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ProductsComponent } from './products/products.component';
import { IncomingnewComponent } from './incomingnew/incomingnew.component';
import { OutgoingnewComponent } from './outgoingnew/outgoingnew.component';
import { StockinventoryComponent } from './stockinventory/stockinventory.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CustomersComponent } from './customers/customers.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MapsComponent } from './maps/maps.component';
import { DocumentsComponent } from './documents/documents.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent },
                    { path: 'update-password', component: ChangePasswordComponent },
                    { path: 'products', component: ProductsComponent },
                    { path: 'incomingnew', component: IncomingnewComponent },
                    { path: 'outgoingnew', component: OutgoingnewComponent },
                    { path: 'stockinventory', component: StockinventoryComponent },
                    { path: 'ordertracking', component: OrdertrackingComponent },
                    { path: 'suppliers', component: SuppliersComponent },
                    { path: 'customers', component: CustomersComponent },
                    { path: 'transaction', component: TransactionComponent },
                    { path: 'maps', component: MapsComponent},
                    { path: 'documents', component: DocumentsComponent },
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
