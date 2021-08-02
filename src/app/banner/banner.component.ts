import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() images: string[] = [];

  windowWidth = window.innerWidth;
  activeImage: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth);
    this.windowWidth = event.target.innerWidth;
  }

  bannerClick(event: any) {
    if (event.target.className.includes('opened')) {
      window.location.href = 'https://www.google.com';
    } else if (this.windowWidth < 700) {
      window.location.href = 'https://www.google.com';
    }
  }
}
