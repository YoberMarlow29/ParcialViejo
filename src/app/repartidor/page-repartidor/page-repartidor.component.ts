import { Component } from '@angular/core';
import { ListaRepartidoresComponent } from '../lista-repartidores/lista-repartidores.component';
import { DetalleRepartidorComponent } from '../detalle-repartidor/detalle-repartidor.component';
import { InfoPaisComponent } from '../../components/info-pais/info-pais.component';
import { Pais } from '../../clases/Pais';

@Component({
  selector: 'app-page-repartidor',
  standalone: true,
  imports: [ListaRepartidoresComponent,DetalleRepartidorComponent,InfoPaisComponent],
  templateUrl: './page-repartidor.component.html',
  styleUrl: './page-repartidor.component.css'
})
export default class PageRepartidorComponent {


  repartidorSeleccionado: any;
  paisSeleccionado: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }


  mostrarDetalleRepartidor(repartidor: any) {
    this.repartidorSeleccionado = repartidor;
    this.paisSeleccionado = repartidor.paisOrigen;
  }


}
