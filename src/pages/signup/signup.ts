import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	slideOneForm: FormGroup;
	submitAttempt: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
	  	this.slideOneForm = formBuilder.group({
	        firstName: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
	        lastName: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
	        phone: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],        
	        email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,} *'), Validators.required])],
	        password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(10), Validators.pattern('[a-zA-Z0-9]*'), Validators.required])],
	        cpassword:['', Validators.compose([Validators.required])]
	    });
	}
  	save(){ 
	    this.submitAttempt = true;	 
	    if(!this.slideOneForm.valid){
	        //this.signupSlider.slideTo(0);
	    }    
	    else {
	        console.log("success!")
	        console.log(this.slideOneForm.value);
	    }	 
	}
  	ionViewDidLoad() {
    	console.log('ionViewDidLoad SignupPage');
  	}

}
