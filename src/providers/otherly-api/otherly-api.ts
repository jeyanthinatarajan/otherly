import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Device } from '@ionic-native/device';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OtherlyApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OtherlyApiProvider {

  private host;
  private DEV_host;
  public Otherly_data;

  constructor(public http: Http) {


    console.log('Hello OtherlyApiProvider Provider');
    this.host = 'http://35.160.26.235:8025';
    this.DEV_host = 'http://staging.other.ly/api';
  }


  CreatePost(post_text, username){

    username = 'carlos';
  	let body = {
      user: username,//'ex: carlos'
      subject: 'From Ionic',
      body: post_text
      
    };

    console.log(username);
  	let post_url = '/posts/';
  	let URL = '/api' + post_url;
  	let header = new Headers;
  	header.append("Accept", 'application/json');
  	header.append('Content-Type', 'application/json;charset=UTF-8');
  	let options = new RequestOptions ({ headers: header});

  	return new Promise(resolve => {
	  	this.http.post(URL, body, options)
	        .map(res => res.json())
	        .subscribe(res => {
	          resolve(res);
	        }, err => {
	          resolve(err);  
	        });

	    });
  	
  }


  GetFriendsList(access_token, get_options){
    console.log('Otherly LDS Get Friends');
    //username = 'carlos';

    //user=normal49437              user wth no friends
    //let post_url = '/friends/?user=carlosumbreon';
    let post_url = '/friends/';
    //?user=carlos42829

    //http://35.160.26.235:8025/api
    //http://staging.other.ly
    let URL = "http://staging.other.ly/api" + post_url;

    if(get_options.search_str !== undefined){
       console.log('URL');
      URL = URL + '&search_str=' + get_options.search_str;
    }
    let token_string = 'token ' + access_token;

    console.log('OTHERLY token string:' + token_string);
    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );
    console.log
    let options = new RequestOptions ({ headers: header, withCredentials: true});

    return new Promise(resolve => {
      this.http.get(URL,options)
          .map(res => res.json())
          .subscribe(res => {
            var result = [];


            for (let item in res.results){

              if (res.results[item].full_name != ""){
                result.push({
                   instance: {
                     full_name : res.results[item].full_name,
                     photo_url: res.results[item].related_user.photo_url,
                     rating: res.results[item].rating,
                     helps_given: res.results[item].related_user.helps_given,
                     source: 'O'
                   }
                 });

              }

              else {
                result.push({
                   instance: {
                     full_name : res.results[item].related_user.first_name + ' ' + res.results[item].related_user.last_name,
                     photo_url: res.results[item].related_user.photo_url,
                     rating: res.results[item].rating,
                     helps_given: res.results[item].related_user.helps_given,
                     source: 'O'
                   }
                 });

              }

            }
            

            resolve(result);
          }, err => {
            resolve(err);  
          });

      });
    
  }


  GetOtherlyAccessToken(accessToken:string){
  	
    let URL = 'http://staging.other.ly/api/login/';
    let body = {
      fb_access_token: accessToken,
      client_id: 'O1nR1EQwIQfCi3UkxRGAQQxu5KTeJaPGZPseJcdc',
      client_secret: '3TIyuiO6tlBK64Regr1aoodebN89gzywya0aQabnQkzHEsWm4EmqCWrIKr6BCcpz63AViAThGH8nm6tV5ImRpai7CIb3wBOQg6REko7JyZ0DLQAmNFRVla6ZJTNdarFb'
    }

    /*let body = {
      fb_access_token: accessToken,
      client_id: 'F0J01mx3juZS48PdMZ3IYPNdGSI37ku4CwEnvOPq',
      client_secret: 'iZgMtOzgYRbFOil7PLTdngbDx6zifZoGIJyaIoZ6FjOEFFJzh7F27KD6H5i82V4St9z4Z2er4DIhTC0lk236vOTIJLKiP7hEtvmopG3dpK66d7iOvphxdW4SoFkiJdnz'
    }*/
    
    let header = new Headers;
    header.append('Content-Type', 'application/json;charset=UTF-8');
    let options = new RequestOptions ({ headers: header});

    console.log('GET OTHERLY TOKEN');
    return new Promise(resolve => {
      this.http.post(URL,body,options)
          .map(res => res.json())
          .subscribe(res => {
             this.Otherly_data = res;
             console.log('Otherly TOKEN:' + this.Otherly_data);
            

            resolve(this.Otherly_data);
          }, err => {
            resolve(err);  
          });

      });


  }


}
