import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AngularFireAuth } from "angularfire2/auth";
import { AlertController, LoadingController, NavController } from "ionic-angular";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public aFAuth: AngularFireAuth,
    public navCtrl: NavController

  ) {

  }
  ionViewDidLoad() {

  this.aFAuth.authState.subscribe(data => {
    
    if (data.email && data.uid) {

      const loading = this.loadingCtrl.create({
        duration: 3000

      });
      loading.onDidDismiss(() => {
        const alert = this.alertCtrl.create({
          title: 'Logado!',
          subTitle: 'Bemvindo...',
          buttons: ['Ok']
        });

        alert.present();

      });
      
      loading.present();
      


    }else{
      const loading = this.loadingCtrl.create({
        duration: 3000

      });
      loading.onDidDismiss(() => {
        const alert = this.alertCtrl.create({
          title: 'errou!',
          buttons: ['Ok']
        });

        alert.present();
        this.navCtrl.push('LoginPage');
      });

      loading.present();

    }
  });

  }

}
