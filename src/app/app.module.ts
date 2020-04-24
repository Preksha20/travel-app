import { NgModule } from "@angular/core";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import {ImageSliderComponent} from './components/image-slider/image-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { FamousplacesComponent } from './components/famousplaces/famousplaces.component';
import { TouristattractionComponent } from './components/famousplaces/touristattraction/touristattraction.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent, ImageSliderComponent, FooterComponent,FamousplacesComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
