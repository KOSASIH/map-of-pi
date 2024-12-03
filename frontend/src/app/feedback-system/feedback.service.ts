import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'https://api.example.com/feedback'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  submitFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/submit`, feedback);
  }

  getFeedback(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  // Additional methods for feedback management can be added here
}
