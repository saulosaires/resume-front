import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile-employment-history',
  templateUrl: './profile-employment-history.component.html',
  styleUrls: ['./profile-employment-history.component.scss']
})
export class ProfileEmploymentHistoryComponent {

   private today: Date = new Date();
  private month = this.today.getMonth();
  private year = this.today.getFullYear();

  start:Date
  end:Date

  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });
}
