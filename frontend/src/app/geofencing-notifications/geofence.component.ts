import { Component, OnInit } from '@angular/core';
import { GeofenceService } from './geofence.service';

@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.component.html',
  styleUrls: ['./geofence.component.scss']
})
export class GeofenceComponent implements OnInit {
  geofenceName: string = '';
  geofenceCoordinates: string = ''; // e.g., "latitude,longitude"
  geofences: any[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private geofenceService: GeofenceService) {}

  ngOnInit(): void {
    this.loadGeofences();
  }

  createGeofence(): void {
    const geofence = {
      name: this.geofenceName,
      coordinates: this.geofenceCoordinates.split(',').map(coord => parseFloat(coord.trim()))
    };

    this.geofenceService.createGeofence(geofence).subscribe(
      (response) => {
        this.successMessage = 'Geofence created successfully!';
        this.errorMessage = '';
        this.geofenceName = '';
        this.geofenceCoordinates = '';
        this.loadGeofences(); // Refresh geofence list
      },
      (error) => {
        console.error('Error creating geofence:', error);
        this.errorMessage = 'Failed to create geofence. Please try again later.';
        this.successMessage = '';
      }
    );
  }

  loadGeofences(): void {
    this.geofenceService.getGeofences().subscribe(
      (data) => {
        this.geofences = data;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error loading geofences:', error);
        this.errorMessage = 'Failed to load geofences. Please try again later.';
      }
    );
  }
}
