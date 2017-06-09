import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  sitename = 'D.Plum App';

  @Output()
  change = new EventEmitter<any>();

  logourl = 'assets/images/logo.png';
  subTitle = '記載著 Will 在網路世界的學習心得與技術分享';
  counter = 0;

  constructor() {
    // setTimeout(() => {
    //   this.sitename = 'DPlum Web';
    // }, 3000);
  }

  ngOnInit() {
  }

  changeTitle() {
    this.sitename = 'D.Plum Web';
    this.change.emit(this.sitename);
  }

  addCounter() {
    this.counter++;
  }

  ShowColor(i) {
    if (i < 5) {
      return 'lowCount';
    } else if (i < 10) {
      return 'midCount';
    } else {
      return 'highCount';
    }
  }

}
