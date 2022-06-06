import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedDirective } from './directives/red.directive';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { ForDirective } from './directives/for.directive';
import { DateTimeFormatPipePipe } from "../app/shared/pipes/DateTimeFormatPipe.pipe";
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './modules/usuario/components/dialogs/add/add.component';
import { DeleteComponent } from './modules/usuario/components/dialogs/delete/delete.component';
import { HeaderComponent } from './core/template/header/header.component';
import { NavComponent } from './core/template/nav/nav.component';
import { MaterialModule } from './shared/material.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    RedDirective,
    ForDirective,
    DateTimeFormatPipePipe,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioModule,
    MaterialModule
  ],
  providers: [
    DatePipe,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
