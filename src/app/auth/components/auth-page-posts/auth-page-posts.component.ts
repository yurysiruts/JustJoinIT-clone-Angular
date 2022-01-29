import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-auth-page-posts',
  templateUrl: './auth-page-posts.component.html',
  styleUrls: ['./auth-page-posts.component.scss'],
})
export class AuthPagePostsComponent implements OnInit {
  slides = [
    {
      id: 1,
      url: './../../../../assets/authPictures/0_light.21b852f7.png',
    },
    {
      id: 2,
      url: './../../../../assets/authPictures/1_light.5702f615.png',
    },
    {
      id: 3,
      url: './../../../../assets/authPictures/2_light.7b5dcac6.png',
    },
    {
      id: 4,
      url: './../../../../assets/authPictures/3_light.e3f225ca.png',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 500,
    nav: true,
    items: 1,
  };

  constructor() {}

  ngOnInit(): void {}
}
