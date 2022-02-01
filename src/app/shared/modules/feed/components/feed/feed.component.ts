import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class feedComponent implements OnInit {
  offers = [
    {
      logo: './../../../../../../assets/mainPage/epam-systems-logo-nobg.png',
      position_name: 'Frontend Tech Lead',
      status: 'NEW',
      experience: '5+ Years of experience',
      about:
        'Building automative project for German customer from scratch. To dosomething cool with the new stack of technologeis.',
      compony_name: 'Epam',
      compony_location: 'Krakow, Poland',
      employment_type: 'Regular employment, B2B',
      time: 'Full-time',
      remote: 'Remote Allowed',
    },
    {
      logo: './../../../../../../assets/mainPage/epam-systems-logo-nobg.png',
      position_name: 'Frontend Tech Lead',
      status: 'NEW',
      experience: '5+ Years of experience',
      about:
        'Building automative project for German customer from scratch. To dosomething cool with the new stack of technologeis.',
      compony_name: 'Epam',
      compony_location: 'Krakow, Poland',
      employment_type: 'Regular employment, B2B',
      time: 'Full-time',
      remote: 'Remote Allowed',
    },
    {
      logo: './../../../../../../assets/mainPage/epam-systems-logo-nobg.png',
      position_name: 'Frontend Tech Lead',
      status: 'NEW',
      experience: '5+ Years of experience',
      about:
        'Building automative project for German customer from scratch. To dosomething cool with the new stack of technologeis.',
      compony_name: 'Epam',
      compony_location: 'Krakow, Poland',
      employment_type: 'Regular employment, B2B',
      time: 'Full-time',
      remote: 'Remote Allowed',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
