import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';

import { Tabla } from '../Tabla';
import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class TablaService {
  
  fecha = Date.now();
  dtstr = this.fecha.toString();
  mapikey='9ace230a37a7c42d28fee13aa7f7de41';
  //privatekey='llave privada de marvel'; //esta llave se ecnuentra en la cuenta de desarrollo de marvel
  privatekey='797b17bed967ab2ab19c7a155893f65c1c6e4c6e';
  envio = Md5.hashStr(this.dtstr+this.privatekey+this.mapikey);
  limite = 6;
  
  //https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&limit=10&apikey=9ace230a37a7c42d28fee13aa7f7de41  
  
  domain: string=`https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&limit=${this.limite}&apikey=${this.mapikey}&hash=${this.envio}`;
  constructor(private http: HttpClient) { }

  getCaracters(){
    return this.http.get<Tabla[]>(`${this.domain}`)
    .map(res => res);
  }

  getUsers(){
    return this.http.get<Tabla[]>(`${this.domain}`)
    .map(res => res);
  }

  addUser(newUser){
    return this.http.post(`${this.domain}/api/formulario`, newUser)
    .map(res=>res);
  }

}
