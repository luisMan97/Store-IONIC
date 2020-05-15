import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = []

  constructor(private storage: Storage) { }

  getProducts() {
    return fetch('assets/data/products.json').then(response => response.json());
  }

  async getProductsOfStorage() {
    const storageProduct = await this.storage.get("products")
      if (storageProduct != null) {
        return storageProduct
      }
  }

  async buyProduct(product) {
    /*this.getProductsOfStorage().then(products => {
      if (products != undefined) {
        this.products = products
      }
    }) */

    this.products.push(product)
    return this.storage.set('products', this.products)
  }
}
