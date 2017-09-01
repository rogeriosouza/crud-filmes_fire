import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { HomePage } from "../home/home";

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

 export class  Filmes {
  
      
    nomeFilme : String;
    descricao : String;
    genero : String;
    ano : String;
    autor : String;
} 

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {
   backgroundImage = 'assets/img/background/background-2.jpg';
   filmesLista:FirebaseListObservable<any[]>;
    
    filmes : Filmes;
  

  constructor(private af:AngularFireDatabase, public navCtrl: NavController,public viewCtrl: ViewController, 
    public navParams: NavParams, public fireBaseProvider:FirebaseProvider ) {

      
      this.filmes = new Filmes();

  }
    addItem(){
      if (this.filmes.nomeFilme != null)  {
      this.fireBaseProvider.addItem(this.filmes);
      
      
      this.navCtrl.push(HomePage);
      }
      
    }
    editItem(filmesLista:any){
      this.navCtrl.push(AboutPage,{conta:filmesLista});
    }
  
   /* filmeToSaveLista(){
   //this.navCtrl.setRoot(HomePage);
    this.filmesLista.push(this.filmes != null).then(() =>{
    //this.navCtrl.pop();
    this.navCtrl.push(HomePage);

    }); */
  }   
   


