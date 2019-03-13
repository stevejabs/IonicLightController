import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lights',
  templateUrl: 'lights.page.html',
  styleUrls: ['lights.page.scss'],
})
export class LightsPage {

  constructor(private router: Router){}

  lightSelected() {
    console.log('light selected...');
    this.router.navigate(['/bulb']);
  }

}
