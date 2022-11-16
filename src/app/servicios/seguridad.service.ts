import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloIdentificar } from '../modelos/indentificar.modelo';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { 

  }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{

    return this.http.post<ModeloIdentificar>(`${this.url}/identificarPersona`, {
    usuario: usuario,
    clave: clave
  },{
    headers: new HttpHeaders({

    })
  })

  }

}