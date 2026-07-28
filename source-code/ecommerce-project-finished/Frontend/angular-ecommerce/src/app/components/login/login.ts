import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subject, takeUntil } from 'rxjs';
import type { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit, OnDestroy {
  private _isAuthenticated = signal(false);
  private _user = signal<User | null | undefined>(null);

  private destroy$ = new Subject<void>();

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe((isAuthenticated) => {
      this._isAuthenticated.set(isAuthenticated);
    });

    this.auth.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this._user.set(user);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get isAuthenticated() {
    return this._isAuthenticated();
  }

  get nickname() {
    return this._user()?.nickname || 'User';
  }

  login() {
    this.auth.loginWithPopup();
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
