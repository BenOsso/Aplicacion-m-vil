import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // Inicializa las variables como cadenas vacías
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    // Verifica si las variables tienen valor antes de procesar
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.navCtrl.navigateRoot('/home');
    } else {
      console.error('Email or password is missing');
    }
  }
}
