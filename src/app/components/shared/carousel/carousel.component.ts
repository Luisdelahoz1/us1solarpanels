import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './ICarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  /**
   * Custom Properties
   */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];
  
  /**
   * Final Properties
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor() { 
    this.finalHeight = this.isFullScreen  ? '100vh' : `${this.height}px`;
  }

  ngOnInit() {
    this.items.map( (i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });
  }


  setCurrentPosition(position: number){
    this.currentPosition = position;
    this.items.find(i => i.id === 0).marginLeft = -100 * position
  }
}
