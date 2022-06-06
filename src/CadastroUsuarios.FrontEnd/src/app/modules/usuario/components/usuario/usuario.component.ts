import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuarioService } from '../../usuario.service';
import { Usuario } from '../../model/usuario';
import { Escolaridade } from '../../model/enum/escolaridade.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddComponent } from '../dialogs/add/add.component';
import { DeleteComponent } from '../dialogs/delete/delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderService } from 'src/app/core/template/header/header.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[]
  displayedColumns = ['id', 'nome', 'sobrenome', 'email', 'dataNascimento', 'escolaridade', 'acoes']
  
  constructor(private serv: UsuarioService, private router: Router, public dialog: MatDialog,
    private _snackBar: MatSnackBar, private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Usuários',
        icon: 'groups',
        routeUrl: ''
      }
    }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.serv.listar().subscribe(result => {
      if (result.status){
        this.usuarios = result.data;
        this.usuarios.forEach(x => x.escolaridadeString = Escolaridade[x.escolaridade]);
      }
      else {
        this._snackBar.open(result.message, '', {
          duration: 3000
        });
      }
    }, (err: HttpErrorResponse) => {
      this._snackBar.open('Erro: ' + err.message, '', {
        duration: 3000
      });
    });
  }

  add(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(confirm => {
      this.loadData();
    });
  }

  update(usuario: Usuario): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(confirm => {
      this.loadData();
    });
  }

  delete(usuario: Usuario): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '400px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(confirm => {
      this.loadData();
    });
  }
}
