import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/main-layout/header/header.component';
import { FooterComponent } from './views/main-layout/footer/footer.component';
import { NavComponent } from './views/main-layout/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { ThankYouComponent } from './views/thank-you/thank-you.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrdersManagementComponent } from './admin/orders-management/orders-management.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    ThankYouComponent,
    DashboardComponent,
    OrdersManagementComponent,
    ReportsComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      { path: '', component: HomeComponent },
      { path: 'product-details', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'thank-you', component: ThankYouComponent },


      { path: 'dashboard', component: DashboardComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'orders-management', component: OrdersManagementComponent },
      { path: 'reports', component: ReportsComponent }
  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
