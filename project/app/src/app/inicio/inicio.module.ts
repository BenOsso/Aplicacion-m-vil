import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { TabsModule } from '../tabs/tabs.module'; // Ajusta la ruta según la estructura de tu proyecto

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    TabsModule // Asegúrate de que la ruta sea correcta
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
