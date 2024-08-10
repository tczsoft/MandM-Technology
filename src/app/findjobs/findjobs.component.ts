import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-findjobs',
  templateUrl: './findjobs.component.html',
  styleUrls: ['./findjobs.component.css']
})
export class FindjobsComponent implements OnInit {

customOptions: OwlOptions
  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      autoplay:true,
      dots: true,
      nav: false,
      autoplayTimeout:1000,
      navText: ["",""],
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

    }
  }

  ngOnInit(): void {
  }

  slidesStore = [{

  }]
 ngAfterViewInit() {
   window.onscroll = function () {
     scroll();
        };

        function scroll() {
            var topbar = document.body.scrollTop;
            if (topbar >= 250 ||
              document.documentElement.scrollTop > 250) {

              (document as any).getElementById('search-sec').classList.add("fixed-top");
                (document as any).getElementById('header').classList.remove("fixed-top");


            } else {
              (document as any).getElementById('search-sec').classList.remove("fixed-top");
              (document as any).getElementById('header').classList.add("fixed-top");

            }

        }
  }

}
