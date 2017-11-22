import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LoginauthPage } from '../pages/loginauth/loginauth';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
//import { Friends } from '../pages/friends/friends';
import { ConversationsPage } from '../pages/conversations/conversations';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';


//Providers
import { Facebook } from "@ionic-native/facebook";
import {GooglePlus} from '@ionic-native/google-plus';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocaldataProvider } from '../providers/localdata/localdata';
import { OtherlyApiProvider } from '../providers/otherly-api/otherly-api';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    //Friends,
	LoginauthPage,
	SignupPage,
    ConversationsPage,
    NotificationsPage,
    MorePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    //Friends,
	LoginauthPage,
	SignupPage,
    ConversationsPage,
    NotificationsPage,
    MorePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocaldataProvider,
    InAppBrowser,
    GooglePlus,
    Facebook,
    OtherlyApiProvider
    
    
  ]
})
export class AppModule {}
