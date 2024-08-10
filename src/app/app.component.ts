import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ Title, Meta } from'@angular/platform-browser';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Technology';
  header_variable=true;





  constructor(

    private titleService:Title,
    private meta:Meta
  ) {
  }

 

 ngOnInit(): void {
  AOS.init();

}



  
}