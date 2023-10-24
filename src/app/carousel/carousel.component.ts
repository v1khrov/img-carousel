import { Component, Input, OnInit } from '@angular/core';

interface CarouselImage {
  imageSrc: string;
  imageAlt?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: CarouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; //3s
  @Input() carouselWidth = '80%'; //80% by default
  @Input() carouselHeight = '500px'; //500px by default

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide)
      this.runAutoSlide();
  }

  /** Running auto slide mode */
  runAutoSlide() {
    setInterval(() => {
      this.nextImage();
    }, this.slideInterval);
  }

  /** Select image by dot/indicator click */
  selectImage(index: number) {
    this.selectedIndex = index;
  }

  /** Previous image by left arrow button click */
  prevImage() {
    this.selectedIndex = (this.selectedIndex === 0) ? this.images.length - 1 : --this.selectedIndex;
  }

  nextImage() {
    this.selectedIndex = (this.selectedIndex === this.images.length - 1) ? 0 : ++this.selectedIndex;
  }
}
