import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bannerImages = [
    'assets/images/img1',
    'assets/images/img2',
    'assets/images/img3',
    'assets/images/img3',
  ];
  bannerImages3 = [
    {normal: 'assets/images/img1', opened: 'assets/images/img1-mob.jpb', mobile: 'assets/images/img1'},
    'assets/images/img2',
    'assets/images/img3',
  ];
}
