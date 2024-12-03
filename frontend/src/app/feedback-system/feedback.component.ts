import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackText: string = '';
  feedbackRating: number = 0;
  feedbackList: any[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedback();
  }

  submitFeedback(): void {
    const feedback = {
      text: this.feedbackText,
      rating: this.feedbackRating
    };

    this.feedbackService.submitFeedback(feedback).subscribe(
      (response) => {
        this.successMessage = 'Feedback submitted successfully!';
        this.errorMessage = '';
        this.feedbackText = '';
        this.feedbackRating = 0;
        this.loadFeedback(); // Refresh feedback list
      },
      (error) => {
        console.error('Error submitting feedback:', error);
        this.errorMessage = 'Failed to submit feedback. Please try again later.';
        this.successMessage = '';
      }
    );
  }

  loadFeedback(): void {
    this.feedbackService.getFeedback().subscribe(
      (data) => {
        this.feedbackList = data;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error loading feedback:', error);
        this.errorMessage = 'Failed to load feedback. Please try again later.';
      }
    );
  }
}
