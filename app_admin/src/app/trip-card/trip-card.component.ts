import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Import Router for navigation
import { Trip } from '../models/trip';     // Import Trip model

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(private router: Router) {}  // Inject Router

  ngOnInit(): void {}

  public editTrip(trip: Trip): void {  // Method to navigate to the edit form
    localStorage.removeItem('tripCode');  // Clear previous trip code
    localStorage.setItem('tripCode', trip.code);  // Store the trip code
    this.router.navigate(['edit-trip']);  // Navigate to the edit trip page
  }
}
