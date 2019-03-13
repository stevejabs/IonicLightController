import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
// import * as control from 'magic-home';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.page.html',
  styleUrls: ['./bulb.page.scss'],
})
export class BulbPage implements OnInit {

  pickedColor: any = null;
  colorPickerHexColor: string = '#00F'; 
  control: any = null;

  constructor() { 
    // This is a static-ip light on my network
    // this.control = new control.Control('192.168.1.123');
  } 

  ngOnInit() {
  }

  // Set the color after it's been picked
  colorChangeComplete(event) {
    this.pickedColor = event.color;
    console.log('Color: ' + JSON.stringify(this.pickedColor));

    let hexColor: string = event.color.hex;
    this.colorPickerHexColor = hexColor;
  }

  // Send the selected color the the bulb
  setColor() {

    //TODO: Instead of check this, we should just not allow
    // the button to be pressed until the color has been selected.
    // Or we roll with a default color...
    if (this.pickedColor == null) {
      console.log('No color was selected...');
      return;
    }

    let rgb = this.pickedColor.rgb;
    this.control.setColor(rgb.r, rgb.g, rgb.b).then(success => {
      console.log('Bulb color set');
    })
  }

}
