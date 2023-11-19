import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/service.empleados';
import { Empleado } from 'src/app/models/empleado';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  public empleados!: Array<Empleado>;
  constructor(public _serviceEmpleados: ServiceEmpleados) {}
  loadEmpleados(): void {
    this._serviceEmpleados.getEmpleados().subscribe((response) => {
      this.empleados = response;
    });
  }
  ngOnInit(): void {
    this.loadEmpleados();
  }
}
