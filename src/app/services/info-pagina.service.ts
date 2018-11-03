import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  deptos: any[] = [];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarDeptos();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarDeptos() {
    this.http.get('https://palmar-29165.firebaseio.com/deptos.json')
      .subscribe( (resp: any) => {

        this.deptos = resp;
        console.log(resp);
      });
  }
}
