import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppB: InAppBrowser) {
  this.goto('other.ly/more');
    
  }


  goto(params){
    const browser = this.inAppB.create("http://" + params+"" , '_self',{location:'no'}); 
  }

  
}
