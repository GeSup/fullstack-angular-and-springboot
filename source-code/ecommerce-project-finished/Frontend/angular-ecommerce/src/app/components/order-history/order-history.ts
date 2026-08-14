import { Component, signal } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { OrderHistory } from '../../common/order-history';
import { OrderHistoryService } from '../../services/order-history.service';

@Component({
  selector: 'app-order-history',
  standalone: false,
  templateUrl: './order-history.html',
  styleUrl: './order-history.css',
})
export class OrderHistoryComponent {
  private _orderHistoryList = signal<OrderHistory[]>([]);
  storage: Storage = sessionStorage;

  constructor(
    private orderHistoryService: OrderHistoryService,
    private auth: AuthService,
  ) {}

  get orderHistoryList() {
    return this._orderHistoryList();
  }

  ngOnInit() {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    // read the user's email address from browser storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);

    // retrieve data from the service
    this.orderHistoryService.getOrderHistory(theEmail).subscribe({
      next: (data) => {
        this._orderHistoryList.set(data._embedded.orders);
      },
    });
  }
}
