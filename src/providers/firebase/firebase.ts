
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

 
@Injectable()
export class FirebaseProvider {

  filmesLista:FirebaseListObservable<any[]>; 
  constructor(public afd: AngularFireDatabase) {
  this.filmesLista = this.afd.list('/filmes');

   }
 

  getFilmes() {
    return this.filmesLista;
  }
 
  addItem(nomeFilme) {
 
    this.afd.list('/filmes/').push(nomeFilme);
  }
 
  removeItem(id) {
    this.afd.list('/filmes/').remove(id);
  }

//Favorites true - false

  getFavorites(favorite){

      return this.filmesLista ;


  }

  addFavorite(favorite){

    this.afd.list('/filmes/').push(favorite);

  }

  removeFavorite(favorite){
    
    return "";
  }

// end Favorites
}