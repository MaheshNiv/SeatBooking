import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
interface Seat {
  number: number;
  isBooked: boolean;
}
@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent {
  coach: Seat[][] = [];
numSeats: any;


  constructor(public fbobj : FormBuilder) {
    this.initializeCoach();
  }
  
  initializeCoach(): void {
    const rows = 12; // Number of rows in the coach

    for (let i = 0; i < rows - 1; i++) {
      this.coach.push(this.createRow(7));
    }

    // Last row with 3 seats
    this.coach.push(this.createRow(3));
  }

  createRow(seats: number): Seat[] {
    const row: Seat[] = [];

    for (let i = 0; i < seats; i++) {
      row.push({ number: i + 1, isBooked: false });
    }

    return row;
  }

  bookSeats(numSeats: number): void {
    const availableSeats = this.getAvailableSeats();
   if (numSeats < 8) {
    if (availableSeats.length >= numSeats) {
      const selectedSeats = availableSeats.slice(0, numSeats);

      selectedSeats.forEach(seat => {
        seat.isBooked = true;
      });

      console.log('Booked seats:', selectedSeats);
     
    } else {
      alert('Insufficient seats available.');
    }
  }else{
    alert("Please reserve up to 7 seats at a time")
  }
}
 

  getAvailableSeats(): Seat[] {
    return this.coach
      .reduce((seats, row) => seats.concat(row), [])
      .filter(seat => !seat.isBooked);
  }
  SeatBook = this.fbobj.group(
    {
      // Add Multiple validations
      username :['', [Validators.required, Validators.minLength(1),Validators.pattern('[1-7]')] ],
})
}

