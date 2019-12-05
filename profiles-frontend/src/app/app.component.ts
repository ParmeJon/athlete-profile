import { Component, OnInit } from '@angular/core';
import { STEP_ITEMS } from "./form-config/multi-step-form";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formContent: any;
  formData: any;
  activeStepIndex: number;
  title = 'profiles-frontend';

  ngOnInit(): void {
    this.formContent = STEP_ITEMS;
    this.formData = {};
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;

    console.log(formData);
  }

}
