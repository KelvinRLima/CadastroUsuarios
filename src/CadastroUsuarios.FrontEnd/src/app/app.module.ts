import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RedDirective } from './directives/red.directive';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { ForDirective } from './directives/for.directive';

import { DateTimeFormatPipePipe } from "../app/shared/pipes/DateTimeFormatPipe.pipe";
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './modules/usuario/components/dialogs/add/add.component';
import { DeleteComponent } from './modules/usuario/components/dialogs/delete/delete.component';
import { UsuarioComponent } from './modules/usuario/components/usuario/usuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderComponent } from './core/template/header/header.component';
import { NavComponent } from './core/template/nav/nav.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    UsuarioComponent,
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
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule
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
