import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AboutPage } from "../about/about";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireAuth } from "angularfire2/auth";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts = [];
  
  filmesLista:FirebaseListObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    public fireBaseProvider:FirebaseProvider
    
  
  ) {
    
    this.filmesLista = this.fireBaseProvider.getFilmes();
  }

  removeItem(id){
    this.fireBaseProvider.removeItem(id);
    
  }

    
  addfavorite(card){

    this.filmesLista = this.fireBaseProvider.getFavorites(card);  

    }
  
  getFavorites(favorite){
    /* 
    if (favorite =! null &&  favorite === 'true'){

      return this.filmesLista ;
    }else{

      return  'true' ;

     } */
  }   

  // sair do login do usuario
  signOut(){
    
  }

  ionViewDidLoad() {
    this.filmesLista = this.fireBaseProvider.getFilmes();
    
    



    this.posts = [
      {
        description: 'Nine Inch Nails Live',
        image: 'assets/img/card/nin-live.png'
      },
      {
        description: 'VELOZES & FURIOSOS-8',
        image: 'assets/img/lists/wishlist-2.jpg'
      },
      {
        description: 'PLANETA DOS MACACOS - A GUERRA',
        image: 'assets/img/lists/wishlist-2.jpg'
      },
      {
        description: 'Look at this amazing clay humming bird I crafted!',
        image: 'https://s-media-cache-ak0.pinimg.com/236x/68/68/a2/6868a2f821e5d15cc8fcd8cfa1694606.jpg'
      },
      {
        description: 'Origami tullip tutorial',
        image: 'https://s-media-cache-ak0.pinimg.com/236x/38/6f/8e/386f8ec1725f09883d827094228d0f82.jpg'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/f6/61/5c/f6615ca7068da18157588890f9e9e03a.jpg'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/0d/29/35/0d2935d14c17aff1baab75360c9e2bd6.jpg'
      },
      {
        description: 'Delicious chocolate bread recipe!',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/06/a9/8e/06a98e67111aae83a481a2c1dbb594a4.jpg'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/8c/37/d58c3783d6ebf79db0f9c057726800a0.jpg'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/f5/35/97/f53597bf16aff91315a0beca27ffdbda.jpg'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/cf/fe/6d/cffe6dd7dece1cb0562f65cd3bfba1ac.jpg'
      },
      {
        description: 'Fastest car of all times',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/5f/bf/34/5fbf3414f9de301c8f4b868b1c2e2339.jpg'
      },
    ];
  }


}
