import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
countup:any

  constructor() {

  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, false)
    this.scroll();

    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").addClass('hide');
  });



    $('a[data-scroll]').click((e) => {
      e.preventDefault();
      var offset = 60;
      var target = ( '#' + $(this).data('scroll') );
      var $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': ($target as any).offset().top - offset
      }, 100, 'swing');
    });
  }

  scroll = (): void => {

    let scrollHeigth;

    if(window.innerWidth < 35){
      scrollHeigth = 0;
     }else if(window.innerWidth < 50 && window.innerWidth > 35){
      scrollHeigth = 25;
     }else if(window.innerWidth < 70 && window.innerWidth > 500){
      scrollHeigth = 35;
     }else if(window.innerWidth < 100 && window.innerWidth > 70){
      scrollHeigth = 50;
     }else{
       scrollHeigth = 65;
     }

     if(window.scrollY >= scrollHeigth){
       document.body.style.setProperty('--navbar-scroll', "white");
       document.body.style.setProperty('--navbar-scroll-text', "black");
       document.body.style.setProperty('--navbar-scroll-shadow', "0px 1px 3px -2px #000000");
       document.body.style.setProperty('--navbar-scroll-logo1', "none");
       document.body.style.setProperty('--navbar-scroll-logo', "block");
     }else if(window.scrollY < scrollHeigth){
       document.body.style.setProperty('--navbar-scroll', "transparent");
       document.body.style.setProperty('--navbar-scroll-text', "white");
       document.body.style.setProperty('--navbar-scroll-shadow', "none");
       document.body.style.setProperty('--navbar-scroll-logo', "none");
       document.body.style.setProperty('--navbar-scroll-logo1', "block");
     }
  }
  ngAfterViewInit() {


    $('.nav a').on('click', function () {
      ($('.navbar-collapse') as any).collapse('hide');
    });
  }

 onMenuClick() {
         let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }
    }



}
