import { Component } from '@angular/core';
import { BlockchainService } from './blockchain.service';

@Component({
  selector: 'app-blockchain-verification',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent {
  transactionId: string = '';
  transactionDetails: any = null;
  errorMessage: string = '';

  constructor(private blockchainService: BlockchainService) {}

  verifyTransaction(): void {
    this.blockchainService.verifyTransaction(this.transactionId).subscribe(
      (data) => {
        this.transactionDetails = data;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error verifying transaction:', error);
        this.errorMessage = 'Transaction verification failed. Please check the transaction ID.';
        this.transactionDetails = null;
      }
    );
  }
}
