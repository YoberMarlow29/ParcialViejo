import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-repartidores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-repartidores.component.html',
  styleUrl: './lista-repartidores.component.css'
})
export class ListaRepartidoresComponent implements OnInit {
  listaRepartidores: any[] = [];
  @Output() repartidorSeleccionado = new EventEmitter<any>();

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.obtenerRepartidores().subscribe(repartidores => {
      this.listaRepartidores = repartidores;
    });
  }

  seleccionarRepartidor(repartidor: any): void
  {
    this.repartidorSeleccionado.emit(repartidor);
  }
}
