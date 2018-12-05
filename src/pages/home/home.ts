import { Component } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public Month = new Date().getMonth() +1;
  public Day = new Date().getDate();
  public Year = new Date().getFullYear();
  public Date : String = this.Day.toString() + "-" + this.Month.toString() + "-" + this.Year.toString();
  public Weeknumber: String = this.getWeek(this.Year, this.Month, this.Day)
  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

   getWeek(year,month,day){
    var a = Math.floor((14-(month))/12);
    var y = year+4800-a;
    var m = (month)+(12*a)-3;
    var jd = day + Math.floor(((153*m)+2)/5) + 
                 (365*y) + Math.floor(y/4) - Math.floor(y/100) + 
                 Math.floor(y/400) - 32045;      // (gregorian calendar)

    var d4 = (jd+31741-(jd%7))%146097%36524%1461;
    var L = Math.floor(d4/1460);
    var d1 = ((d4-L)%365)+L;
    console.log((Math.floor(d1/7) + 1).toString())
    return (Math.floor(d1/7) + 1).toString();        
}

}
