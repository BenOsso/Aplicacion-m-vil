import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',  // Asegúrate de que este archivo exista
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  correo: string = '';

  constructor(private router: Router, private toastController: ToastController) {}

  recuperarContrasena() {
    if (this.correo) {
      this.presentToast('Se ha enviado un mensaje de recuperación a tu correo.');
      this.router.navigate(['/home']);
    } else {
      this.presentToast('Por favor, ingresa tu correo electrónico.');
    }
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }
}
