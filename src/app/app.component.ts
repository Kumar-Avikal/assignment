import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  collection = false;
  focusedItem: number = 1;
  itemIndex: number = 1;
  selected: string = 'events';

  select(option: string) {
    this.selected = option;
    if(this.selected == 'events'){
      this.collection = false;
    }else if(this.selected == 'collections'){
      this.collection = true;
    }
  }
  change(){
    
  }
  images: string[] = [
    'https://w0.peakpx.com/wallpaper/836/523/HD-wallpaper-j-cole-kod-album-cover-j-cole-kod-album-cover-music-hip-hop-rapper-paint-work.jpg',
    'https://w0.peakpx.com/wallpaper/355/777/HD-wallpaper-alex-turner-am-arctic-arctic-monkeys-humbug-indie-indie-rock-monkeys-ru-mine.jpg',
    'https://w0.peakpx.com/wallpaper/885/258/HD-wallpaper-21-savage-album-cover-hip-hop-rap.jpg',
    'https://w0.peakpx.com/wallpaper/446/385/HD-wallpaper-bands-acdc-arctic-monkeys-green-day-logos-nirvana-sos-vamps.jpg',
    'https://w0.peakpx.com/wallpaper/361/290/HD-wallpaper-kendrick-lamar-d-n-album-cover-hiphop-humble-jesus-kendrcik-lamar-man-rap-sayings-text.jpg',
    'https://w0.peakpx.com/wallpaper/446/8/HD-wallpaper-girls-the-1975-album-cover.jpg'
  ];
  images1: string[] = [
    'https://w0.peakpx.com/wallpaper/617/932/HD-wallpaper-vertical-light-blue-album-covers.jpg',
    'https://w0.peakpx.com/wallpaper/446/385/HD-wallpaper-bands-acdc-arctic-monkeys-green-day-logos-nirvana-sos-vamps.jpg',
    'https://w0.peakpx.com/wallpaper/805/885/HD-wallpaper-bts-cover-album-korean-kpop-you-never-walk-alone.jpg',
    'https://w0.peakpx.com/wallpaper/361/290/HD-wallpaper-kendrick-lamar-d-n-album-cover-hiphop-humble-jesus-kendrcik-lamar-man-rap-sayings-text.jpg',
    'https://w0.peakpx.com/wallpaper/393/641/HD-wallpaper-bts-wings-bts-cover-album-korean-kpop-wings.jpg',
    'https://w0.peakpx.com/wallpaper/446/8/HD-wallpaper-girls-the-1975-album-cover.jpg'
  ];

  currentIndex: number = 0;
  transform: string = '';
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); 
  }

  updateTransform() {
    this.transform = `translateX(-${this.currentIndex * 300}px)`;
  }

  prev() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
    this.updateTransform();
    this.startAutoSlide();
  }

  next() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
    this.updateTransform();
    this.startAutoSlide();
  }
  
}
