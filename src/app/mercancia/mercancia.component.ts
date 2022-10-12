import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { id } from '@swimlane/ngx-charts';
import { MercanciasService } from '../services/mercancias.service';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent  {

  datosZonas:any[]=[];

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicioZona:ZonasService,
    public servicioMercancia:MercanciasService
    ) {

    this.servicioZona.consultarZonas()
      .subscribe(respuesta=>{
        console.log(respuesta);
        this.datosZonas=respuesta
      })

  }

  retirarMercancia(idMercancia:any):void{

    this.servicioMercancia.retirarMercancia(idMercancia)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    })
    
  }

  public buscarMercanciaId():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['',Validators.required]
    })
  }
 
}
