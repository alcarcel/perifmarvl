import { Component, OnInit } from '@angular/core';

import {TablaService} from '../../services/tabla.service';
import {Tabla} from '../../Tabla'; 

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
tabla: Tabla[];
  constructor(private tablaService: TablaService) { 
    this.tablaService.getCaracters()
    .subscribe(users =>{
      this.tabla=users;
      console.log(users); 
      console.log(this.tabla);
    })
  }

  ngOnInit() {
  }

}
