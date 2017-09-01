import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { User } from "../../models/user";
import { RegisterPage } from "../register/register";
import { AngularFireAuth } from 'angularfire2/auth'
import { TabsPage } from "../tabs/tabs";


@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public aFAuth: AngularFireAuth

  ) { }

  async login(user: User) {

    try {
      const result = this.aFAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.navCtrl.push(TabsPage);

    } catch (error) {
      var errorCode = errorCode
      var errorMessage = errorMessage;
      console.log(error);
      console.log(errorMessage);
    }

      
    /* this.aFAuth.authState.subscribe(data => {

      if (data.email && data.uid) {
        const loading = this.loadingCtrl.create({
          duration: 500

        });

        loading.onDidDismiss(() => {
          const alert = this.alertCtrl.create({
            title: 'Logado!',
            subTitle: 'Efetuando login...',
            buttons: ['Ok']
          });
          alert.present();
          //this.navCtrl.push(TabsPage);
        });

        loading.present();

      }else{
        const loading = this.loadingCtrl.create({
          duration: 500

        });
        loading.onDidDismiss(() => {
          const alert = this.alertCtrl.create({
            title: 'errou!',
            buttons: ['Ok']
          });
          alert.present();
          
        });

        loading.present();

      }
    }); */



  }

}
