import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaPaisesComponent } from '../../components/lista-paises/lista-paises.component';

@Component({
  selector: 'app-alta-repartidor',
  standalone: true,
  imports: [ReactiveFormsModule,ListaPaisesComponent],
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.css'
})
export default class AltaRepartidorComponent {

  altaForm : FormGroup;

  constructor(public formBuilder: FormBuilder,private auth:AuthService ){

      this.altaForm = this.formBuilder.group({
        dni: ['', [Validators.required]],
        nombre: ['', [Validators.required]],
        edad: ['', [Validators.required]],
        capacidadTransporte: ['', [Validators.required]],
        paisOrigen: ['', [Validators.required]],
        unidadPropio: [false, [Validators.required]],
    });
  }

  get errorControl(){

    return this.altaForm.controls;
  }

  onCountrySelect(country: any) {
    this.altaForm.controls['paisOrigen'].setValue(country.name.common);
  }

  async btnAgregar() {
    if (this.altaForm.valid) {
      const repartidor = this.altaForm.value;
      try {
        await this.auth.guardarRepartidor(repartidor);
        alert('Repartidor guardado con éxito!');
        this.altaForm.reset();
      } catch (error) {
        console.error('Error al guardar el repartidor:', error);
      }
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

}
