import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { TabsPage } from '../tabs/tabs';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

username;
password;



  constructor(public navCtrl: NavController, public navParams: NavParams, private authentication :AuthenticationProvider) {

      if(localStorage.getItem('habxtoken')){
        this.navCtrl.push(TabsPage)

        }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){

    // console.log(this.username, this.password)

    this.authentication.doLogin(this.username, this.password).subscribe(res =>{
      // console.log(res);
      localStorage.setItem('habxtoken',JSON.stringify(res));


    });


  }



}
