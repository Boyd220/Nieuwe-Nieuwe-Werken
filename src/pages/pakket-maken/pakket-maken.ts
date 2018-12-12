import { Component, OnInit, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { BrowserModule } from '@angular/platform-browser';
import { NgDatepickerModule } from 'ng2-datepicker';
import { DatepickerOptions } from 'ng2-datepicker';
import * as nlLocale from 'date-fns/locale/nl';

@IonicPage()
@Component({
  selector: 'page-pakket-maken',
  templateUrl: 'pakket-maken.html',
})

@NgModule({
  imports: [
    MultiselectDropdownModule,
    BrowserModule,
    NgDatepickerModule
  ],
  declarations: [MultiselectDropdownModule ]
})

export class PakketMakenPage implements OnInit {

  public currentDate = new Date();
// Default selection
optionsModel: number[] = [1, 2];
 
// Settings configuration
mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
    showCheckAll: true,
    showUncheckAll:true,

};
 
// Text configuration
myTexts: IMultiSelectTexts = {
    checkAll: 'Selecteer alles',
    uncheckAll: 'Deselecteer alles',
    checked: 'Optie geselecteerd',
    checkedPlural: 'Opties geselecteerd',
    searchPlaceholder: 'Zoek naar optie',
    searchEmptyResult: 'Geen optie gevonden',
    searchNoRenderText: 'Typ in de zoekbalk voor resultaten',
    defaultTitle: 'Seleteer skillset',
    allSelected: 'Alles geselecteerd',
};
 
// Labels / Parents
myOptions: IMultiSelectOption[];
  ngOnInit() {
      this.myOptions = [
          { id: 1, name: 'Beleid' },
          { id: 2, name: 'Innovatie' },
          { id: 3, name: 'Netwerkbeheer' },
          { id: 4, name: 'Systeembeheer' },
          { id: 5, name: 'Storagebeheer' },
          { id: 6, name: 'Cloudbeheer' },
          { id: 7, name: 'Management' },
      ];
  }

  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'DD-MM-YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
    locale: nlLocale,
    minDate: new Date(1970,1,1), // Minimal selectable date
    maxDate: new Date(2030,12,31),  // Maximal selectable date
    barTitleIfEmpty: 'Klik hier om een datum te kiezen',
    placeholder: 'Klik hier om een datum te kiezen', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
  };

  public Month = new Date().getMonth() +1;
  public Day = new Date().getDate();
  public Year = new Date().getFullYear();
  public Date : String = this.Day.toString() + "-" + this.Month.toString() + "-" + this.Year.toString();
  public Weeknumber: String = this.getWeek(this.Year, this.Month, this.Day)
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
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
    return (Math.floor(d1/7) + 1).toString();        
}
}
