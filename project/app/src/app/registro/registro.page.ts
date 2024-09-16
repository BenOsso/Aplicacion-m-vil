import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  clave: string = '';
  rol: string = ''; // Añadir la propiedad rol

  constructor(private router: Router, private toastController: ToastController) {}

  // Método para validar el correo electrónico
  validarCorreo(correo: string): boolean {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(correo);
  }

  // Método para registrar un usuario y guardarlo en localStorage
  registrarUsuario() {
    if (this.nombre && this.apellido && this.correo && this.clave && this.rol) {
      if (this.validarCorreo(this.correo)) {
        const usuario = {
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.correo,
          clave: this.clave,
          rol: this.rol, // Incluye el rol en el objeto de usuario
        };

        // Guardar el usuario en localStorage
        localStorage.setItem(this.correo, JSON.stringify(usuario));
        this.presentToast('Usuario registrado exitosamente.');

        // Redirigir a la página de inicio de sesión o inicio
        this.router.navigate(['/home']);
      } else {
        this.presentToast('El correo electrónico debe contener un @.');
      }
    } else {
      this.presentToast('Por favor, completa todos los campos.');
    }
  }

  // Mostrar un mensaje de éxito o error
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }
}
