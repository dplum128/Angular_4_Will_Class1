import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App, Hi';
  keyword = '';


  constructor (public dataSvc: DataService) {
    this.dataSvc.loadArticles();
  }

  keyKW($event: KeyboardEvent) {
    console.log($event);
  }

  // 語法糖：control filter，直接將要設定的鍵值寫在html
  clearAllKW($event: KeyboardEvent) {
    console.log($event);
    this.keyword = '';
  }

  setKW(input: string) {
    this.keyword = input;
  }

}
