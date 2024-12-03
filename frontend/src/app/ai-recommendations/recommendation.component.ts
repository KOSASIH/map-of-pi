import { Component, OnInit } from '@angular/core';
import { RecommendationService } from './recommendation.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  recommendations: any[] = []; // Array to hold recommendations
  userId: string = '12345'; // Replace with actual user ID logic

  constructor(private recommendationService: RecommendationService) {}

  ngOnInit(): void {
    this.loadRecommendations();
  }

  loadRecommendations(): void {
    this.recommendationService.getRecommendations(this.userId).subscribe(
      (data) => {
        this.recommendations = data;
      },
      (error) => {
        console.error('Error loading recommendations:', error);
      }
    );
  }
}
