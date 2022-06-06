import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseUrl}api/Usuario/GetAll`);
  }

  adicionar(usuario: Usuario): Observable<boolean>{
    return this.http.post<boolean>(`${this.baseUrl}api/Usuario/Add`, usuario);
  }

  atualizar(usuario: Usuario): Observable<boolean>{
    return this.http.put<boolean>(`${this.baseUrl}api/Usuario/Update`, usuario);
  }

  deletar(id: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.baseUrl}api/Usuario/Delete/${id}`);
  }
}
