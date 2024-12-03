import { Component, OnInit } from '@angular/core';
import { ARService } from './ar.service';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss']
})
export class ARComponent implements OnInit {
  locations: any[] = []; // Array to hold business locations

  constructor(private arService: ARService) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations(): void {
    this.arService.getBusinessLocations().subscribe(
      (data) => {
        this.locations = data;
      },
      (error) => {
        console.error('Error loading locations:', error);
      }
    );
  }

  // Method to initialize AR
  initializeAR(): void {
    // Logic to initialize AR experience
    console.log('AR Initialized with locations:', this.locations);
  }
  }
