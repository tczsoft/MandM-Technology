import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: false,
    autoplayTimeout:1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: false
  }
  
  
  
  
  
  
  
  
  
  
  
  
  title = 'ngSlick';


slides = [342, 453, 846, 855, 234, 564, 744, 243];

slideConfig = {
  "slidesToShow": 4,
  "slidesToScroll": 1,
  "dots": true,
  "infinite": false
};

addSlide() {
  this.slides.push(488)
}

removeSlide() {
  this.slides.length = this.slides.length - 1;
}

slickInit(e: any) {
  console.log('slick initialized');
}

breakpoint(e: any) {
  console.log('breakpoint');
}

afterChange(e: any) {
  console.log('afterChange');
}

beforeChange(e: any) {
  console.log('beforeChange');
}

  constructor() { }

  ngOnInit(): void {
  }

}
