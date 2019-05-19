import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalComponent } from './rental.component';

import { RentalService } from '../shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

const routes: Routes = [
    { path: 'rentals',
      component: RentalComponent,
      children: [
          { path: '', component: RentalListingComponent },
          { path: ':rentalId', component: RentalDetailComponent}
      ]
    }
  ]

  
@NgModule({
    declarations: [
        RentalListItemComponent,
        RentalListingComponent,
        RentalComponent,
        RentalDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [RentalService]
})

export class RentalModule {

}