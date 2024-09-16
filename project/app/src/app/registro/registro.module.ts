import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroPage } from './registro.page';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { TabsModule } from '../tabs/tabs.module'; // Ajusta la ruta según la estructura de tu proyecto

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    TabsModule // Asegúrate de que la ruta sea correcta
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
