import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() images: string[] = [];

  activeImage: number = 0;

  bannerClick(index: number, event: any) {
    this.activeImage = index;

    if (event.target.className.includes('opened')) {
      window.location.href = 'https://www.google.com';
    }
  }
}
