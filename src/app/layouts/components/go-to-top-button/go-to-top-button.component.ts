import { Component } from '@angular/core';

@Component({
  selector: 'app-go-to-top-button',
  templateUrl: './go-to-top-button.component.html',
  styleUrls: ['./go-to-top-button.component.scss']
})
export class GoToTopButtonComponent {
  goToTop() {
    window.scrollTo({top: 0});
  }
}
