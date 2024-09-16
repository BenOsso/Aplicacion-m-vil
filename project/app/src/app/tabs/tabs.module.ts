import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [TabsComponent],
  exports: [TabsComponent]  // Asegúrate de exportar el componente si lo necesitas en otros módulos
})
export class TabsModule {}
