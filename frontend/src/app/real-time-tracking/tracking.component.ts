import { Component } from '@angular/core';
import { TrackingService } from './tracking.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent {
  paymentId: string = '';
  paymentStatus: any = null;
  errorMessage: string = '';

  constructor(private trackingService: TrackingService) {}

  checkPaymentStatus(): void {
    this.trackingService.getPaymentStatus(this.paymentId).subscribe(
      (data) => {
        this.paymentStatus = data;
        this.errorMessage = '';
      },
 (error) => {
        console.error('Error fetching payment status:', error);
        this.errorMessage = 'Payment status retrieval failed. Please check the payment ID.';
        this.paymentStatus = null;
      }
    );
  }
}
