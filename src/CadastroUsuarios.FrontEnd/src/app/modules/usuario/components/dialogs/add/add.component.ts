import { DatePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Escolaridade, Esc } from "../../../model/enum/escolaridade.model";
import { Usuario } from "../../../model/usuario";
import { UsuarioService } from "../../../usuario.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})

export class AddComponent implements OnInit {
  titulo: string;
  usuario: Usuario = {
    id: 0,
    nome: "",
    sobrenome: "",
    email: "",
    dataNascimento: new Date(),
    escolaridade: 1,
    escolaridadeString: "",
  };

  escolaridade: Esc[] = [
    {value: 'infantil', viewValue: 'Infantil'},
    {value: 'fundamental', viewValue: 'Fundamental'},
    {value: 'medio', viewValue: 'Médio'},
    {value: 'superior', viewValue: 'Superior'}
  ];

  selectedEsc = '';

  date = new FormControl({value: new Date()});

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private serv: UsuarioService,
    private datePipe: DatePipe,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.titulo = 'Editar Usuário';
      this.usuario = this.data;
      this.date = new FormControl({value: this.usuario.dataNascimento});
      this.selectedEsc = Escolaridade[this.usuario.escolaridade]; //this.escolaridade[0].value;
      console.log("Dialog Update", this.data);
    }
    else {
      this.titulo = 'Adicionar Usuário';
    }
  }

  selectEscolaridade(event: Event) {
    this.selectedEsc = (event.target as HTMLSelectElement).value;
  }

  salvar(): void {
    if (this.usuario.id == 0) {
      this.usuario.escolaridade = Escolaridade[this.selectedEsc];
      this.usuario.dataNascimento = this.date.value;
      console.log("Add!");
      this.serv.adicionar(this.usuario).subscribe(
        (result) => {
          if (result){
            this.dialogRef.close();
            this._snackBar.open("Usuário adicionado com sucesso!");
          }
          else {
            this._snackBar.open("Falha ao adicionar usuário");
          }
        },
        (err: HttpErrorResponse) => {
          this._snackBar.open("Erro: " + err.message);
        }
      );
    } else {
      console.log("Update!");
      this.serv.atualizar(this.usuario).subscribe(
        (result) => {
          if (result){
            this.dialogRef.close();
            this._snackBar.open("Usuário atualizado com sucesso!");
          }
          else {
            this._snackBar.open("Falha ao atualizar usuário");
          }
        },
        (err: HttpErrorResponse) => {
          this._snackBar.open("Erro: " + err.message);
        }
      );
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
