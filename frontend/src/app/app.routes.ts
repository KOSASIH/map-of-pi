import { Routes } from '@angular/router';
import { AddProductComponent } from './business/manage-business/add-product/add-product.component';
import { BusinessPhotosComponent } from './business/business-settings/business-photos/business-photos.component';
import { ManageBusinessComponent } from './business/manage-business/manage-business.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.routes').then((m) => m.BUSINESS_ROUTES),
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.routes').then((m) => m.SHOP_ROUTES),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'business-photos',
    component: BusinessPhotosComponent,
  },
  {
    path: 'manage-business/:id',
    component: ManageBusinessComponent,
  },
];
