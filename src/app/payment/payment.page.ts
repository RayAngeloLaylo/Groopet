import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private alertController: AlertController,  private router: Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Order of Service Succes!',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Ok',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();
  }

}
