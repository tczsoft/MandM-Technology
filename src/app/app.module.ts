import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { CountUpModule } from 'ngx-countup';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FindjobsComponent } from './findjobs/findjobs.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
       HeaderComponent,
       FooterComponent,
       ContactComponent,
       CareerComponent,
       TestimonialsComponent,
       TestimonialComponent,
       FindjobsComponent,

  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlickCarouselModule,
    CarouselModule,
    CountUpModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
