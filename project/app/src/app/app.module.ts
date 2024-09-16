import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsModule } from './tabs/tabs.module';  // Importa el módulo de pestañas

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TabsModule  // Añade TabsModule aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
