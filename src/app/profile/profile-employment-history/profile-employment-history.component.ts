import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

import * as _moment from 'moment';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatDatepicker} from "@angular/material/datepicker";
import {Moment} from "moment";
import {ExperienceService} from "../../service/experience/experience.service";
import {Experience} from "../../model/experience";
import {AuthService} from "../../service/auth-service";
import {User} from "../../model/user";
import {CountryService} from "../../service/country/country.service";
import {Country} from "../../model/country";
const moment =  _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-profile-employment-history',
  templateUrl: './profile-employment-history.component.html',
  styleUrls: ['./profile-employment-history.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ProfileEmploymentHistoryComponent implements OnInit {

   private today: Date = new Date();
  private month = this.today.getMonth();
  private year = this.today.getFullYear();

  start:Date
  end:Date
  public Editor = ClassicEditor;

  countries: Country[] = [];
  experiences:Experience[]=[]
  user: User;

  constructor(private experienceService:ExperienceService,
              private countryService: CountryService,
              private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit() {
    this.getCountries();
    this.authService.user.subscribe(user => {
      this.user = user;
      this.getExperiences(user);
    });
  }

  date = new FormControl(moment());

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }


  public onReady(editor: any) {
    console.log("CKEditor5 Angular Component is ready to use!", editor);
  }
  public onChange({ editor }: ChangeEvent) {
    const data = editor.data.get()
    console.log(data);
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }


  private getExperiences(user: User) {
    this.experienceService.findByUserId(user.id)
      .subscribe(experiences => {this.experiences = experiences;console.log(this.experiences)});
  }
}
