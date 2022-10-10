import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { MercanciasService } from '../services/mercancias.service';

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicioMercancias:MercanciasService
    ){ }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()

  }

  public analizarFormulario():void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['',[Validators.required]],
      tiporemitente:['',[Validators.required]],
      idremitente:['',[Validators.required]],
      nombreremitente:['',[Validators.required]],
      deptoremitente:['',[Validators.required]],
      municipioremitente:['',[Validators.required]],
      direccionremitente:['',[Validators.required]],
      tipodestinatario:['',[Validators.required]],
      iddestinatario:['',[Validators.required]],
      nombredestinatario:['',[Validators.required]],
      deptodestinatario:['',[Validators.required]],
      municipiodestinatario:['',[Validators.required]],
      direcciondestinatario:['',[Validators.required]],
    })
  }

  public buscarMercancia(){

    let iup=this.formulario.value.iup
    this.servicioMercancias.buscarMercanciaPorId(iup)
    .subscribe(

      respuesta=>{console.log(respuesta)}

    )

  }

}
