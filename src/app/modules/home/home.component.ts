import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  completeRate = 75;
  currentDate = moment().format('MM.DD')
  inputList = [
    {
      iconClass: 'icon-knife',
      text: 'en.morning',
    },
    {
      iconClass: 'icon-knife',
      text: 'en.lunch',
    },
    {
      iconClass: 'icon-knife',
      text: 'en.dinner',
    },
    {
      iconClass: 'icon-cup',
      text: 'en.snack',
    }
  ];
  
  captionImageList = [
    [
      {
        src: './assets/images/m01.jpg',
        caption: '05.21.Morning'
      },
      {
        src: './assets/images/l03.jpg',
        caption: '05.21.Lunch'
      },
      {
        src: './assets/images/d01.jpg',
        caption: '05.21.Dinner'
      },
      {
        src: './assets/images/l01.jpg',
        caption: '05.21.Snack'
      },
    ],
    [
      {
        src: './assets/images/m01.jpg',
        caption: '05.20.Morning'
      },
      {
        src: './assets/images/l02.jpg',
        caption: '05.20.Lunch'
      },
      {
        src: './assets/images/d02.jpg',
        caption: '05.20.Dinner'
      },
      {
        src: './assets/images/s01.jpg',
        caption: '05.20.Snack'
      },
    ]
    

  ]
}
