import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  dadosCollection: AngularFirestoreCollection;


  constructor(private angularFirestore: AngularFirestore) {
    this.dadosCollection = angularFirestore.collection('listaProdutos');
  }

  cadastro(dados: any) {
    return this.dadosCollection.add(dados);
  }

  consultaUnica(id : any){
    return this.dadosCollection.doc(id).valueChanges();
  }

  consulta() {
    return this.dadosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data}
        })
      })
    );
  }


  editar(dados: any, id: any) {
    return this.dadosCollection.doc(id).update(dados);
  }

  excluir(id: any) {
    return this.dadosCollection.doc(id).delete();
  }
}
