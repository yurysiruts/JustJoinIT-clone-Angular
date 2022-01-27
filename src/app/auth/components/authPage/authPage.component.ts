import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-auth-page',
  templateUrl: './authPage.component.html',
  styleUrls: ['./authPage.component.scss'],
})
export class AuthPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
