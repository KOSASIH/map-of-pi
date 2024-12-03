import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  private apiUrl = 'https://api.example.com/payments'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getPaymentStatus(paymentId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${paymentId}`);
  }

  // Additional methods for real-time tracking can be added here
}
