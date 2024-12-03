import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeofenceService {
  private apiUrl = 'https://api.example.com/geofences'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  createGeofence(geofence: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, geofence);
  }

  getGeofences(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  // Additional methods for geofencing can be added here
}
