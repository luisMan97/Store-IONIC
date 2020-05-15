import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  user: any

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { 
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params.user)
    })
  }

  goToHome() {
    this.navCtrl.navigateBack("/home")
  }

}
