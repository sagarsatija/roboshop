import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth'
import { environment } from './../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuardService as authGuard, AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path:'',component:HomeComponent
      },
      {
        path:'login',component:LoginComponent
      },
      {
        path:'products',component:ProductsComponent
      },
      {
        path:'shopping-cart',component:ShoppingCartComponent
      },
      {
        path:'checkout',component:CheckoutComponent,canActivate:[AuthGuardService]
      },
      {
        path:'order-successs',component:OrderSuccessComponent,canActivate:[AuthGuardService]

      },
      
      {
        path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService]
      },
      {
        path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGuardService,AdminAuthGuardService]
      },
      {
        path:'orders',component:MyOrdersComponent,canActivate:[AuthGuardService]
      },
    
    ])
    
  ],
  providers: [AuthService,authGuard,AdminAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
