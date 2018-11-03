import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-deptos',
  templateUrl: './deptos.component.html',
  styleUrls: ['./deptos.component.css']
})
export class DeptosComponent implements OnInit {

  constructor( public infoService: InfoPaginaService ) { }

  ngOnInit() {
  }

}
