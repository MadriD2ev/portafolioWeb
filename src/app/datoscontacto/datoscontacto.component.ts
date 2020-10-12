import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-datoscontacto',
  templateUrl: './datoscontacto.component.html',
  styleUrls: ['./datoscontacto.component.css']
})
export class DatoscontactoComponent implements OnInit {

  //crear una variable que reciba un objeto que va a tener un parametro llamado mensaje que se llenará del formulario en datos contacto
  item:any = {
    mensaje:''
  }

  //agregar una variable privada que sería el servicio
  constructor( private servicio: ConexionService ) { }

  ngOnInit(): void {
  }

  agregar(){
    this.servicio.agregarItem(this.item);
    this.item.mensaje = ''; //vaciar el campo después de guardar
  }

}
