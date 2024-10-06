import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController 

  ) {}

  gopage2() {
    this.navCtrl.navigateForward('page2')
  }
  
  gopage3() {
    this.navCtrl.navigateForward('/page3')
  }

}
