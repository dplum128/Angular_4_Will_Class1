import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'D.Plum App';
  logourl = 'assets/images/logo.png';

  constructor() {
    setTimeout(() => {
      this.sitename = 'DPlum Web';
    }, 3000);
   }

  ngOnInit() {
  }

  changeTitle () {
    this.sitename = 'D.Plum Web';
  }

}
