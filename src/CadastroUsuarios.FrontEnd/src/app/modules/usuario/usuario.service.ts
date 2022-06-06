import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';
import { Result } from 'src/app/shared/model/result';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  listar(): Observable<Result<Usuario[]>>{
    return this.http.get<Result<Usuario[]>>(`${this.baseUrl}api/Usuario/GetAll`);
  }

  adicionar(usuario: Usuario): Observable<Result<boolean>>{
    return this.http.post<Result<boolean>>(`${this.baseUrl}api/Usuario/Add`, usuario);
  }

  atualizar(usuario: Usuario): Observable<Result<boolean>>{
    return this.http.put<Result<boolean>>(`${this.baseUrl}api/Usuario/Update`, usuario);
  }

  deletar(id: number): Observable<Result<boolean>>{
    return this.http.delete<Result<boolean>>(`${this.baseUrl}api/Usuario/Delete/${id}`);
  }
}
