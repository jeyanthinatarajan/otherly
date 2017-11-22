import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginauthPage } from './loginauth';

@NgModule({
  declarations: [
    LoginauthPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginauthPage),
  ],
})
export class LoginauthPageModule {}
