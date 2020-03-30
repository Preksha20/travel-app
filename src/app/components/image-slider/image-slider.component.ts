import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  public imagesURL;
  ngOnInit(): void {
    this.imagesURL = ['./assets/images/2.JPG', './assets/images/3.JPG','./assets/images/4.JPG','./assets/images/5.JPG'];
  }
}


