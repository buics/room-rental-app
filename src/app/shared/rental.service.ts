import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {

    private rentals: Rental[] = [{
        id: "1",
        title: "Central Appartment Rental",
        city: "Cebu",
        street: "Asia Town IT Park",
        category: "appartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very good appartment",
        dailyRate: 2500,
        shared: false,
        createdAt: "05/10/2018"
      },
      {
        id: "2",
        title: "East Appartment Rental",
        city: "Lapu-lapu",
        street: "Asia Town IT Park",
        category: "appartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very good appartment",
        dailyRate: 1500,
        shared: false,
        createdAt: "05/10/2018"
      },
      {
        id: "3",
        title: "West Appartment Rental",
        city: "Toledo",
        street: "Asia Town IT Park",
        category: "appartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very good appartment",
        dailyRate: 1000,
        shared: false,
        createdAt: "05/10/2018"
      },
      {
        id: "4",
        title: "North Appartment Rental",
        city: "Lacion",
        street: "Asia Town IT Park",
        category: "appartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very good appartment",
        dailyRate: 2000,
        shared: false,
        createdAt: "05/10/2018"
      }];

      public getRentalById(rentalId: string): Observable<Rental> {
          return new Observable<Rental> ((observer) => {
              setTimeout(() => {
                  const foundRental = this.rentals.find((rental) => {
                      return rental.id == rentalId;
                  });
                  observer.next(foundRental);
              }, 2000);
          });
      }

      public getRentals(): Observable<Rental[]> {
          return new Observable<Rental[]> ((observer) => {
              setTimeout(()=> {
                  observer.next(this.rentals);
              }, 1000);

          });
      }

}