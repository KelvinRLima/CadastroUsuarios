import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../usuario.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Usuario,
    public dialogRef: MatDialogRef<DeleteComponent>,
    private serv: UsuarioService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  confirmDelete(): void {
    this.serv.deletar(this.data.id).subscribe(
      (result) => {
        if (result){
          this.dialogRef.close();
          this._snackBar.open("Usuário excluído com sucesso!");
        }
        else {
          this.dialogRef.close();
          this._snackBar.open("Falha ao excluir usuário");
        }
      },
      (err: HttpErrorResponse) => {
        this._snackBar.open("Erro: " + err.message);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
