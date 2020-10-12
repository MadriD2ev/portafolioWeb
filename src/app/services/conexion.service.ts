import { Injectable } from '@angular/core';

//Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//interface es una clase que nos permite designar un objeto que siempre tenga las mismas caracteristicas
export interface Item { mensaje: string; } //en la BD hay una variable mensaje

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>; //coleccion que traera desde firestore
  items: Observable<Item[]>; //cada uno de los items va a ser un observable

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items'); //este this.itemsCollection va a traer una colección de items desde firebase llamada items
    //this.items = this.itemsCollection.valueChanges(); //este this.items va a evaluar la coleccion de itemsCollection y los guardará 
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item; //Item nombre de mi interface, la data que es toda la información o coleccion de datos
        const id = a.payload.doc.id; //además de traernos el id 
        return { id, ...data };
      }))
    );
  }


  //agegar y guardar un mensaje nuevo paso 1

  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }

}


