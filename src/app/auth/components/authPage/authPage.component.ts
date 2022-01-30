import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-auth-page',
  templateUrl: './authPage.component.html',
  styleUrls: ['./authPage.component.scss'],
})
export class AuthPageComponent implements OnInit {
  registered: boolean = false;
  route!: string;
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.route = this.router.url;
    console.log(this.router.url);
  }

  onRegistered(registered: boolean) {
    this.registered = registered;
  }
}
