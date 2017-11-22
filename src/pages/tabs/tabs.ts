import { Component, ViewChild } from '@angular/core';
import { NavController, Events} from 'ionic-angular';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Friends } from '../friends/friends';
import { LoginauthPage } from '../loginauth/loginauth';
import { SignupPage } from '../signup/signup';
import { ConversationsPage } from '../conversations/conversations';
import { NotificationsPage } from '../notifications/notifications';
import { MorePage } from '../more/more';

@Component({
	selector: 'tabs',
  	templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Friends;
  tab6Root = LoginauthPage;
  tab7Root = SignupPage;
  tab3Root = ConversationsPage;
  tab4Root = NotificationsPage;
  tab5Root = MorePage;
  //tab3Root = ContactPage;

  @ViewChild('mainTabs') mainTabs: TabsPage;

  constructor(public nav: NavController, 
              public events: Events) {

  }


  public tapped() {
    this.events.publish('friends:refresh', Date.now() );
  }
  

}
