import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  rol: string = ''; // Campo para el rol
  mostrarImagenQR: boolean = false;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Obtiene el estado de la navegación y verifica el rol del usuario
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const { nombre, apellido, rol } = navigation.extras.state as any;
      this.nombre = nombre;
      this.apellido = apellido;
      this.rol = rol;

      // Muestra el botón solo si el usuario es docente
      if (this.rol === 'docente') {
        this.mostrarImagenQR = false; // Inicialmente no mostrar el QR
      }
    }
  }

  mostrarQR() {
    if (this.rol === 'docente') {
      this.mostrarImagenQR = true;
    } else {
      this.presentToast('No tienes permisos para generar el QR.');
    }
  }

  escaneaQR() {
    if (this.rol === 'estudiante') {
      // Aquí puedes implementar la lógica para escanear QR
      this.presentToast('Escanea el código QR.');
    } else {
      this.presentToast('No tienes permisos para escanear el QR.');
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
