import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from './login/login.component';
import {Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { RegistrationComponent } from './registration/registration.component';
// import { HomeComponent } from './home/home.component';
// import { BeerComponent } from './beer/beer.component';
import { AppComponent } from './app.component';
// import { SearchComponent} from './search/search.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
// import { ChatModule } from './chat/chat.module';
// import { BenderARComponent } from './bender-ar/bender-ar/bender-ar.component';



const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch:'prefix' },

 // { path: 'register', component: RegisterComponent },
//  { path: 'login', component: LoginComponent },
//  { path: '',
//  redirectTo: '/home',
//  pathMatch: 'full' },
  //  {path: 'home', component:HomeComponent},
//  { path: 'registration', component: RegistrationComponent },
//  {path: 'beers', component: BeerComponent},
//  { path: 'search/:name', component: SearchComponent },
//  {path: 'chat', component: ChatDialogComponent},
//  {path: 'benderAR',component: BenderARComponent},
//  {path:'**', component: PageNotFoundComponent}

 // { path: 'home', component: AppComponent },

 // { path: 'dashboard', component: DashboardComponent},

 //  { path: 'cart', component: CartComponent,canActivate:[GuardService] },
 // { path: 'orders', component: OrdersComponent, canActivate:[GuardService] },
 //  { path: 'productDetail/:Id', component: ProductDetailComponent },
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }


 // { path: 'seller/dashboard', component: SellerComponent },
 // { path: 'seller/addProduct', component: SellerAddProductComponent },
 // { path: 'seller/viewProduct', component: SellerViewModifyProductComponent }
 //{ path: 'products/:prodName', component: ProductsComponent },

];



@NgModule({
 imports: [FormsModule,
   CommonModule,
  //  ChatModule,
   RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload',scrollPositionRestoration: 'enabled',
   anchorScrolling: 'enabled' })
 ],
//  exports: [RouterModule, ChatDialogComponent],
exports: [RouterModule],
 declarations: []
})
export class AppRoutingModule { }
