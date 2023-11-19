import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/service.empleados';
import { Autorizacion } from 'src/app/models/autorizacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('cajauser') cajaUserRef!: ElementRef;
  @ViewChild('cajapassword') cajaPassowrdRef!: ElementRef;
  public autorizacion!: Autorizacion;
  constructor(private _serviceAuth: ServiceEmpleados) {}
  login() {
    var usuario = this.cajaUserRef.nativeElement.value;
    var pass = this.cajaPassowrdRef.nativeElement.value;

    this.autorizacion = new Autorizacion(usuario, pass);
    this._serviceAuth.autorizar(this.autorizacion).subscribe((response) => {
      var authToken = response.response;
      environment.token = authToken;
      console.log(response.response);
    });

  }
}
