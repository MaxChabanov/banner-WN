import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bannerImages = [
    {
      normal: 'assets/images/img1.png',
      opened: 'assets/images/img1-opened.png',
    },
    {
      normal: 'assets/images/img2.png',
      opened: 'assets/images/img2-opened.png',
    },
    {
      normal: 'assets/images/img3.png',
      opened: 'assets/images/img3-opened.png',
    },
    {
      normal: 'assets/images/img3.png',
      opened: 'assets/images/img3-opened.png',
    },
  ];
  bannerImages3 = [
    {
      normal: 'assets/images/img1.png',
      opened: 'assets/images/img1-opened.png',
    },
    {
      normal: 'assets/images/img2.png',
      opened: 'assets/images/img2-opened.png',
    },
    {
      normal: 'assets/images/img3.png',
      opened: 'assets/images/img3-opened.png',
    },
  ];
}
