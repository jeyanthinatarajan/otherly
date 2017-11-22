import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events, App, Platform } from 'ionic-angular';

//provider
import { LocaldataProvider } from '../../providers/localdata/localdata';

//NATIVE FEATURES
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts } from '@ionic-native/contacts';

//PAGES
//import { MobileContact } from '../friends/mobilecontact';
;


//Otherly API connection
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';

@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
  providers:[Contacts]
})


export class Friends {
	List = [];
  list = [];
  mobile_contact = [];
  API_List :any;
	items: any;
  contactlist: any;
  private UserData: any;
	private add_friends = false;
	private search_friend: any;
	private quantity : any;
	private search = -2;


	//@ViewChild(Content) content: Content;

	constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
  				private inAppB: InAppBrowser,
          public platform: Platform,
          private contact: Contacts,
  				private OtherlyAPI: OtherlyApiProvider,
          private Lds: LocaldataProvider,
  				public events: Events,
          public app: App) {

    this.platform.ready().then(() => {
       var opts = {   
          filter : "M",                                
          multiple: true,        
          hasPhoneNumber:true,                             
          fields:  [ 'displayName', 'name' ]
        };
        contact.find([ 'displayName', 'name' ],opts).then((contacts) => {
          this.contactlist=contacts;
          this.MobileContactsinArray();
          //console.log("contact list: " + JSON.stringify(this.contactlist));
        }, (error) => {
          console.log(error);
        })
    })


    this.Lds.getUser()
       .then(data => {
         this.UserData = data;


         //USER INFORMATIONS HAVE BEEN RECEIVED HERE
         
         this.OtherlyAPI.GetFriendsList(this.UserData.otherly_token,{})
         .then(data => {
           this.API_List = data;
           console.log("Friends page USER DATA: " + JSON.stringify(this.API_List))

           //if(this.API_List.length >= 2){

            for (let item in this.API_List)
            this.list.push(this.API_List[item])


            this.List = this.list.sort(function(a, b){
              if ( a.instance.full_name < b.instance.full_name )
                  return -1;
              if ( a.instance.full_name > b.instance.full_name )
                  return 1;
              return 0;

            });
           //}
           /*else {
             for (let item in this.API_List)
               this.List.push(this.API_List[item])

           }*/

          //console.log('LIST O & M: ' + JSON.stringify(this.List));
           this.quantity = this.List.length;
           console.log('LIST O & M: ' + JSON.stringify(this.List));

         
     });






     });



    

    
  }

  MobileContactsinArray(){
    for (let item in this.contactlist){
      this.list.push({
        instance: {
                     full_name : this.contactlist[item].displayName,
                     photo_url: '',
                     mobile_number: this.contactlist[item].phoneNumbers[0].value,
                     rating: '',
                     helps_given: '',
                     source: 'M'
                   }
      })

    }


  }


  ionSelected() {
    console.log("Friends has been selected");
    this.add_friends = false;
    console.log(this.add_friends);
  }

  goto(params){
    //const browser = this.inAppB.create("http://" + params+"" , '_self',{location:'yes'});
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.List.push( this.List.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


  Search(){
  	this.search = -1;
  	console.log("Search field : " + this.search_friend);

  	/*this.OtherlyAPI.GetFriendsList('carlos',{search_str:this.search_friend})
       .then(data => {
       	this.API_List = data;

       	 //this.List = Object.keys(data);

       	this.search = this.List.length;

       	console.log("Quantity: " + this.search);

       	this.search = -2;

        //console.log("My Friends: " + JSON.stringify(this.List));
     });*/
     for (let item in this.list){
       if( this.list[item].indexOf(this.search_friend) >= 0){
        console.log('Found: '+this.list[item].full_name);
        }
     }

  }

  Show_Add_friends(){
  	this.add_friends = !this.add_friends;
  }

  
}
