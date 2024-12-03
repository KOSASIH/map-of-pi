import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  private apiUrl = 'https://api.blockchain.com/v3/exchange/tickers'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  verifyTransaction(transactionId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${transactionId}`);
  }

  // Additional blockchain-related methods can be added here
}
