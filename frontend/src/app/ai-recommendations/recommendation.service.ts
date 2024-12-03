import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private apiUrl = 'https://api.example.com/recommendations'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getRecommendations(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`);
  }

  // Additional methods for AI recommendations can be added here
}
