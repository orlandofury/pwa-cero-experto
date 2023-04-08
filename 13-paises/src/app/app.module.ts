import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaisComponent } from './pages/pais/pais.component';
import { PaisesComponent } from './pages/paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
