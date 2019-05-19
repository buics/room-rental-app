import { Component, OnInit } from '@angular/core';

import { RentalService } from '../../shared/rental.service';
import { Rental } from '../../shared/rental.model';

@Component({
  selector: 'app-rental-listing',
  templateUrl: './rental-listing.component.html',
  styleUrls: ['./rental-listing.component.scss']
})
export class RentalListingComponent implements OnInit {

  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();

     rentalObservable.subscribe(
       (rentals: Rental[]) => {
        this.rentals = rentals;
        
       }, (err) => {

       },
       () => {

       }
     )
  }

}
