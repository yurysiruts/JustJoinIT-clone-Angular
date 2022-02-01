import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private currentThemeSub= new BehaviorSubject<string>('light');

  currentTheme$ = this.currentThemeSub.asObservable()

  constructor(rendererFactory: RendererFactory2) {
      this.renderer = rendererFactory.createRenderer(null, null);
  }

  init(): void {
    if(window.localStorage.getItem('darkMode')) {
      this.setDarkMode();
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setDarkMode();
    }
  }

  setDarkMode(): void {
    this.renderer.addClass(document.body,'dark')
    this.currentThemeSub.next('dark')
    window.localStorage.setItem('darkMode', 'true')
  }

  setLight(): void {
    this.renderer.removeClass(document.body,'dark')
    this.currentThemeSub.next('light')
    window.localStorage.removeItem('darkMode')
  }

}
