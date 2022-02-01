import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors';
import { ThemeService } from 'src/app/shared/theme.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  // isLoggedIn$: Observable<boolean>;
  // isAnonymous$: Observable<boolean>;
  // currentUser$: Observable<CurrentUserInterface | null>;
  currentTheme$ = this.themeService.currentTheme$

  constructor(private store: Store, private themeService: ThemeService) {
  }

  ngOnInit(): void {
    //   this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    //   this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    //   this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  toggleTheme(theme: string): void {
    theme === 'light' ? this.themeService.setDarkMode() : this.themeService.setLight()
  }
}
