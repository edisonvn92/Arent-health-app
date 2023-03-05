import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caption-image',
  templateUrl: './caption-image.component.html',
  styleUrls: ['./caption-image.component.scss']
})
export class CaptionImageComponent {
  @Input() imageSrc: string = '';
  @Input() imageWidth = '200px';
  // @Input() imageHeight = '200px';
  @Input() aspectRatio = '1/1' 
  @Input() caption: string = '';
}
