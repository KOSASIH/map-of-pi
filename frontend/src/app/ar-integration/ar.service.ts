import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ARService {
  private apiUrl = 'https://api.example.com/business-locations'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getBusinessLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Additional AR-related methods can be added here
}
