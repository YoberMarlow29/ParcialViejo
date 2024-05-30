import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-paises.component.html',
  styleUrl: './lista-paises.component.css'
})
export class ListaPaisesComponent implements OnInit {
  @Output() countryEv = new EventEmitter<any>();
  countries: Array<any> = [];

  constructor(private countryServ: AuthService) {}

  ngOnInit() {
    const requests = this.countryServ.getByRegions(['europe', 'africa']);
    forkJoin(requests).subscribe((responses) => {
      let arrAux: Array<any> = [];
      responses.forEach(response => {
        arrAux = arrAux.concat(response as Array<any>);
      });
      arrAux.sort((a, b) => a.name.common > b.name.common ? 1 : -1);
      this.countries = arrAux.slice(0, 3);
    });
  }

  onSelect(country: any) {
    this.countryEv.emit(country);
  }
}
