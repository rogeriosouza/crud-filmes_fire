import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage ,AlertController} from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage } from "../login/login";


 @IonicPage()
 

 @Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(
  
   public aFAuth:AngularFireAuth,
   public navCtrl: NavController,
   public alertCtrl: AlertController,
   public navParams: NavParams
  
  ) 
   {            }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  async saveGoToRegister(user:User){
  
    if ( (user.email  && user.password) ){
      
        if ( user.password.length >= 6) {

          return    await this.aFAuth.auth.createUserWithEmailAndPassword(user.email,user.password )
          .then((sucess) => {
            console.log(user);
            console.log("passou aki");
            console.log("error");
            this.navCtrl.push(LoginPage);
        
          }).catch (function(error) {
            // Handle Errors here.
            var errorCode = errorCode
            var errorMessage = errorMessage;
            
            console.log(errorCode ,  errorMessage);
          });


        }else{
          const alert = this.alertCtrl.create({
            title: 'Senha menor que 6!',
            buttons: ['Ok']
          });
          alert.present();
        }
      
         
      
    }else{
      const alert = this.alertCtrl.create({
        title: 'Favor preencher email e senha!',
        subTitle: 'Efetuando registro ...',
        buttons: ['Ok']
      });
      alert.present();
    }

  }

}