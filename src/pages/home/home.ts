import { Component } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public Month = new Date().getMonth() +1;
  public Date : String = new Date().getDate().toString() + "-" + this.Month.toString() + "-" + new Date().getFullYear();
  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
}
