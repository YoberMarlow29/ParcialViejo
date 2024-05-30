import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

import {AngularFireModule} from '@angular/fire/compat';
import { provideHttpClient } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({"projectId":"yober-2911",
    "appId":"1:1009541570616:web:7a1a7be1ee63fda1ee86cd",
    "storageBucket":"yober-2911.appspot.com",
    "apiKey":"AIzaSyBDd9EwD4y2R6CUqbTkYUadKoODz26EFEQ",
    "authDomain":"yober-2911.firebaseapp.com",
    "messagingSenderId":"1009541570616"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
     provideStorage(() => getStorage()),
     importProvidersFrom(AngularFireModule.initializeApp({
      apiKey: "AIzaSyBDd9EwD4y2R6CUqbTkYUadKoODz26EFEQ",
      authDomain: "yober-2911.firebaseapp.com",
      projectId: "yober-2911",
      storageBucket: "yober-2911.appspot.com",
      messagingSenderId: "1009541570616",
      appId: "1:1009541570616:web:7a1a7be1ee63fda1ee86cd"
    }))]
};
