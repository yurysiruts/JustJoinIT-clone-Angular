import { Component } from '@angular/core';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'JustJoinIT-clone-angular';

  constructor(private themeService: ThemeService) {
    this.themeService.init();
  }
}
