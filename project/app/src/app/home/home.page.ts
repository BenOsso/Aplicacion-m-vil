import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  correo: string = "";
  clave: string = "";
  nombre: string = "";
  apellido: string = "";

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  // Método para validar el correo electrónico
  validarCorreo(correo: string): boolean {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(correo);
  }

  clearInputs() {
    this.nombre = "";
    this.apellido = "";
    this.correo = "";
    this.clave = "";
  }

  PasarDatos() {
    if (this.validarCorreo(this.correo)) {
      // Verifica las credenciales y obtiene el rol
      const usuario = localStorage.getItem(this.correo);
      if (usuario) {
        const datosUsuario = JSON.parse(usuario);
        if (datosUsuario.clave === this.clave) {
          this.nombre = datosUsuario.nombre;
          this.apellido = datosUsuario.apellido;
          let navigationExtras = {
            state: {
              nombre: this.nombre,
              apellido: this.apellido,
              rol: datosUsuario.rol // Pasa el rol como parte de la navegación
            }
          };
          this.router.navigate(['/inicio'], navigationExtras);
        } else {
          this.presentToast("Usuario y/o contraseña incorrecta");
        }
      } else {
        this.presentToast("Usuario y/o contraseña incorrecta");
      }
    } else {
      this.presentToast('El correo electrónico debe contener un @.');
    }
  }

  irARecuperar() {
    this.router.navigate(['/recuperar']);
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}
