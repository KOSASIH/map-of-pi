import { Component, OnInit } from '@angular/core';
import { LoyaltyService } from './loyalty.service';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss']
})
export class LoyaltyComponent implements OnInit {
  userId: string = '12345'; // Replace with actual user ID logic
  rewards: any[] = [];
  programs: any[] = [];
  errorMessage: string = '';

  constructor(private loyaltyService: LoyaltyService) {}

  ngOnInit(): void {
    this.loadRewards();
    this.loadLoyaltyPrograms();
  }

  loadRewards(): void {
    this.loyaltyService.getUser Rewards(this.userId).subscribe(
      (data) => {
        this.rewards = data;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error loading rewards:', error);
        this.errorMessage = 'Failed to load rewards. Please try again later.';
      }
    );
  }

  loadLoyaltyPrograms(): void {
    this.loyaltyService.getLoyaltyPrograms().subscribe(
      (data) => {
        this.programs = data;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error loading loyalty programs:', error);
        this.errorMessage = 'Failed to load loyalty programs. Please try again later.';
      }
    );
  }
}
