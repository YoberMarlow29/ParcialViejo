import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Repartidor } from '../clases/Repartidor';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://api.github.com/users/octaviovillegas';
  readonly apiPaises: string = 'https://restcountries.com/v3.1/';


  constructor(private http: HttpClient,private auth:Auth,private firestore: AngularFirestore, private estado:AngularFireAuth) {}

  getUserData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  getUserLogged(){

    return this.estado.authState;

  }

  salir(){

    this.auth.signOut();
  }

  async guardarRepartidor(repartidor: Repartidor){

    const repartidorInfo = repartidor;

    await this.firestore.collection('repartidores').add(repartidorInfo);

  }

  getByRegions(regions: string[]) {
    const requests = regions.map(region => this.http.get(`${this.apiPaises}region/${region}`));
    return requests;
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${this.apiPaises}name/${name}`);
  }

  obtenerRepartidores(): Observable<any[]> {
    return this.firestore.collection('repartidores', ref => ref.orderBy('edad')).valueChanges();

  }
}
