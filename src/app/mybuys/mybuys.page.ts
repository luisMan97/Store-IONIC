import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-mybuys',
  templateUrl: './mybuys.page.html',
  styleUrls: ['./mybuys.page.scss'],
})
export class MybuysPage {

  purchases: any
  user: any

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private productsService: ProductsService) { 
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params.user)
      this.purchases = this.user.purchases
      this.getProductsOfStorage()
    });
  }

  getProductsOfStorage() {
    this.productsService.getProductsOfStorage().then(products => {
      if (products != undefined) {
        products.forEach(element => {
          this.purchases.push({
            "producto": element.producto,
            "valor": element.valor,
            "total": element.total,
            "fecha": element.fecha,
            "cantidad": element.cantidad
          })
        })
      }
    })
  }

  goToHome() {
    this.navCtrl.navigateBack("/home")
  }
}
