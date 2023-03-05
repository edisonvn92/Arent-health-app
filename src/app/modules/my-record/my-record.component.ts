
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-my-record',
  templateUrl: './my-record.component.html',
  styleUrls: ['./my-record.component.scss']
})
export class MyRecordComponent {
  currentDate = moment().format('YY.MM.DD')

  navigationList = [
    {
      imageSrc: './assets/images/MyRecommend-1.jpg',
      title: 'en.body_record',
      btnText: 'record.my_body_record',
      navigationTarget: "myRecord"
    },
    {
      imageSrc: './assets/images/MyRecommend-2.jpg',
      title: 'en.my_exercise',
      btnText: 'record.my_exercise_record',
      navigationTarget: "myExercise"
    },
    {
      imageSrc: './assets/images/MyRecommend-3.jpg',
      title: 'en.my_diary',
      btnText: 'record.my_diary',
      navigationTarget: "myDiary"
    }
  ];
  exerciseList = [
    {
      activity:'家事全般（立位・軽い）',
      timeCount: 10,
      timeUnit: 'min',
      energyCount: 26,
      energyUnit: 'kcal'
    },
    {
      activity:'家事全般（立位・軽い）',
      timeCount: 10,
      timeUnit: 'min',
      energyCount: 26,
      energyUnit: 'kcal'
    },
    {
      activity:'家事全般（立位・軽い）',
      timeCount: 10,
      timeUnit: 'min',
      energyCount: 26,
      energyUnit: 'kcal'
    },
    {
      activity:'家事全般（立位・軽い）',
      timeCount: 10,
      timeUnit: 'min',
      energyCount: 26,
      energyUnit: 'kcal'
    },
    {
      activity:'家事全般（立位・軽い）',
      timeCount: 10,
      timeUnit: 'min',
      energyCount: 26,
      energyUnit: 'kcal'
    },
    {
      activity:'家事全般（立位・軽い）',
      timeCount: 10,
      timeUnit: 'min',
      energyCount: 26,
      energyUnit: 'kcal'
    },
    {
      activity:'家事全般（立位・軽い）',
      timeCount: 10,
      timeUnit: 'min',
      energyCount: 26,
      energyUnit: 'kcal'
    },
    {
      activity:'家事全般（立位・軽い）',
      timeCount: 10,
      timeUnit: 'min',
      energyCount: 26,
      energyUnit: 'kcal'
    },
    {
      activity:'家事全般（立位・軽い）',
      timeCount: 10,
      timeUnit: 'min',
      energyCount: 26,
      energyUnit: 'kcal'
    }
  ];

  diaryList = [
    {
      date: moment().format('YY.MM.DD'),
      hour: moment().format('hh:mm'),
      diaryText: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: moment().format('YY.MM.DD'),
      hour: moment().format('hh:mm'),
      diaryText: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: moment().format('YY.MM.DD'),
      hour: moment().format('hh:mm'),
      diaryText: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: moment().format('YY.MM.DD'),
      hour: moment().format('hh:mm'),
      diaryText: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: moment().format('YY.MM.DD'),
      hour: moment().format('hh:mm'),
      diaryText: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: moment().format('YY.MM.DD'),
      hour: moment().format('hh:mm'),
      diaryText: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: moment().format('YY.MM.DD'),
      hour: moment().format('hh:mm'),
      diaryText: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    },
    {
      date: moment().format('YY.MM.DD'),
      hour: moment().format('hh:mm'),
      diaryText: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    }



    
  ]

  scrollToTarget(id: string) {
    let el = document.getElementById(id);
    if (el) el.scrollIntoView();
  }
} 
