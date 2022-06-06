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

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[]
  displayedColumns = ['id', 'nome', 'sobrenome', 'email', 'dataNascimento', 'escolaridade', 'acoes']
  
  constructor(private serv: UsuarioService, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.serv.listar().subscribe(result => {
      this.usuarios = result;
      this.usuarios.forEach(x => x.escolaridadeString = Escolaridade[x.escolaridade]);
    }, (err: HttpErrorResponse) => {

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
