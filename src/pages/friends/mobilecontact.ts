import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts } from '@ionic-native/contacts';

/**
 * Generated class for the ConversationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mobilecontact',
  templateUrl: 'mobilecontact.html',
  providers:[Contacts]
})
export class MobileContact {

  contactlist: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private inAppB: InAppBrowser, 
              public platform: Platform,
              private contact: Contacts) {
  

  this.platform.ready().then(() => {
       var opts = {   
          filter : "M",                                
          multiple: true,        
          hasPhoneNumber:true,                             
          fields:  [ 'displayName', 'name' ]
        };
        contact.find([ 'displayName', 'name' ],opts).then((contacts) => {
          this.contactlist=contacts;
          console.log("contact list: " + JSON.stringify(this.contactlist));
        }, (error) => {
          console.log(error);
        })
    })

    
  }

  goBack(){
    this.navCtrl.pop();
  }


  goto(params){
    const browser = this.inAppB.create("http://" + params+"" , '_self',{location:'no'});

  }

  
}
