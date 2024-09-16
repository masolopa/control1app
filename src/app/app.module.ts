import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// ESTO ES NECESARIO PARA LAS ANIMACIONESPARA USAR ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LOCALE_ID } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule
    , IonicModule.forRoot({ innerHTMLTemplatesEnabled: true })
    , AppRoutingModule
    , BrowserAnimationsModule
    , MatDatepickerModule
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
    , provideAnimationsAsync()
    , {
      provide: LOCALE_ID,
      useValue: 'es-CL'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
