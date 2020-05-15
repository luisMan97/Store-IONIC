import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users = [{}]
  idSelected = 1

  navigationExtras: NavigationExtras = {}

  constructor(private navCtrl: NavController, private userService: UserService) {}

  ionViewDidEnter() {
    this.userService.getUsers().then(newUsers => {
      this.users = newUsers.users
    });
  }

  onChange($event) {
    this.idSelected = $event.target.value
  }

  goToProfile() {
    this.navigationExtras = {
      queryParams: {
        user: JSON.stringify(this.users[this.idSelected - 1])
      }
    }

    this.navCtrl.navigateForward(["/profile"], this.navigationExtras)
  }

  goToBuy() {
    this.navCtrl.navigateForward("/buy")
  }

  goToMyBuys() {
    this.navigationExtras = {
      queryParams: {
        user: JSON.stringify(this.users[this.idSelected - 1])
      }
    }

    this.navCtrl.navigateForward(["/mybuys"], this.navigationExtras)
  }

}
