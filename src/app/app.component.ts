import { Component } from '@angular/core';

//Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; //solo es para verificar que tenemos una conexion a firebase

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'portafolioWebMgH';
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }
}
