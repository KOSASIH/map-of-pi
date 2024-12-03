import { Component } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  amount: number = 0;
  paymentId: string = '';
  paymentStatus: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private paymentService: PaymentService) {}

  initiatePayment(): void {
    const paymentData = {
      amount: this.amount,
      currency: 'USD', // Change as needed
      // Add other payment details as required
    };

    this.paymentService.createPayment(paymentData).subscribe(
      (response) => {
        this.successMessage = 'Payment initiated successfully!';
        this.errorMessage = '';
        this.paymentId = response.paymentId; // Assuming the response contains a paymentId
      },
      (error) => {
        console.error('Error initiating payment:', error);
        this.errorMessage = 'Failed to initiate payment. Please try again later.';
        this.successMessage = '';
      }
    );
  }

  checkPaymentStatus(): void {
    if (!this.paymentId) {
      this.errorMessage = 'Please enter a valid payment ID.';
      return;
    }

    this.paymentService.getPaymentStatus(this.paymentId).subscribe(
      (response) => {
        this.paymentStatus = response.status; // Assuming the response contains a status field
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error checking payment status:', error);
        this.errorMessage = 'Failed to check payment status. Please try again later.';
      }
    );
  }
}
