import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoyaltyService {
  private apiUrl = 'https://api.example.com/loyalty'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getUser Rewards(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/rewards?userId=${userId}`);
  }

  getLoyaltyPrograms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/programs`);
  }

  // Additional methods for loyalty programs can be added here
}
