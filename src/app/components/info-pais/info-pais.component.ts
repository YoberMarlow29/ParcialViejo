import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-info-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-pais.component.html',
  styleUrl: './info-pais.component.css'
})
export class InfoPaisComponent {
  @Input() chosenCountry: string | undefined;
  countryInfo: { [key: string]: string } = {};
  isLoading = false;

  constructor(private countryServ: AuthService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chosenCountry'] && this.chosenCountry) {
      this.getInfoPais(this.chosenCountry);
    }
  }

  getInfoPais(name: string) {
    this.isLoading = true; // Iniciar el spinner de carga
    this.countryServ.getByName(name).subscribe({
      next: (res: any) => {
        if (res.length > 0) {
          const country = res[0];
          this.countryInfo['name'] = country.name.common;
          this.countryInfo['cca3'] = country.cca3;
          this.countryInfo['capital'] = country.capital ? country.capital[0] : 'N/A';
          this.countryInfo['subregion'] = country.subregion;
          this.countryInfo['flag'] = country.flags.svg;
        }
        this.isLoading = false; // Detener el spinner de carga
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false; // Detener el spinner de carga en caso de error
      }
    });
  }
}
