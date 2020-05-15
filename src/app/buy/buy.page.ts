import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage {

  products = [{}]
  buyForm: FormGroup;
  idSelected = 0
  schedule: any;

  validation_messages = {
    cantidad: [
      {
        type: "required", message: "Escoge la cantidad de este producto"
      }, 
      {
        type: "min", message: "Minimo 1 producto"
      }
    ]
  }


  constructor(private formBuilder: FormBuilder,  private productsService: ProductsService, private navCtrl: NavController, public alertController: AlertController) { 

    this.buyForm = this.formBuilder.group({
      cantidad: new FormControl("", Validators.compose([
        Validators.required,
        Validators.min(1)
      ]))
    })
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Compra realizada!',
      subHeader: '',
      message: 'El producto ha sido comprado, pulsa Ok para seguir comprando.',
      buttons: ['OK']
    })

    await alert.present()
  }

  onChange($event) {
    console.log($event.target.value)
    this.idSelected = $event.target.value - 1
  }

  buyProduct(credentials) {
    this.schedule = {
      "producto": this.products[this.idSelected]["name"],
      "valor": this.products[this.idSelected]["price"],
      "total": this.products[this.idSelected]["price"] * credentials.cantidad,
      "fecha": "15/05/2020",
      "cantidad": credentials.cantidad
    }

    this.productsService.buyProduct(/*this.products[this.idSelected]*/this.schedule).then(() => {
      this.presentAlert()
    })
  }

  ionViewDidEnter() {
    this.productsService.getProducts().then(products => {
      this.products = products.products
    })
  }

  goToHome() {
    this.navCtrl.navigateBack("/home")
  }

}
