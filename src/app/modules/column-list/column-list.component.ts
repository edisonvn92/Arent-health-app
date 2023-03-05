import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.scss']
})
export class ColumnListComponent {
  recommendList = [
    {
      title: 'en.recommended_column',
      text: 'column.recommendation'
    },
    {
      title: 'en.recommended_column',
      text: 'column.recommendation'
    },
    {
      title: 'en.recommended_column',
      text: 'column.recommendation'
    },
    {
      title: 'en.recommended_column',
      text: 'column.recommendation'
    },
  ];
  articleList = [
    {
      imageSrc: './assets/images/column-1.jpg',
      time: moment().format('YYYY.MM.DD hh:mm'),
      sampleText: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      tagList: ['魚料理',  '和食', 'DHA']
    },
    {
      imageSrc: './assets/images/column-2.jpg',
      time: moment().format('YYYY.MM.DD hh:mm'),
      sampleText: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      tagList: ['魚料理',  '和食', 'DHA']
    },
    {
      imageSrc: './assets/images/column-3.jpg',
      time: moment().format('YYYY.MM.DD hh:mm'),
      sampleText: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      tagList: ['魚料理',  '和食', 'DHA']
    },
    {
      imageSrc: './assets/images/column-4.jpg',
      time: moment().format('YYYY.MM.DD hh:mm'),
      sampleText: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      tagList: ['魚料理',  '和食', 'DHA']
    },
  ]
}
