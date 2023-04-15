import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'msform';

  form: FormGroup;
  step = 1;
  monthly = true;

  arcade = false;
  advanced = false;
  pro = false;

  checkedOnline = false;
  checkedStorage = false;
  checkedProfile = false;

  total = 0;

  userData = {
    name: '',
    email: '',
    phone: '',
  };

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: [this.userData.name, Validators.required],
      email: [this.userData.email, [Validators.required, Validators.email]],
      phone: [this.userData.phone, [Validators.required]],
    });
  }

  submitForm() {
    this.step = 2;
  }

  ChangePlanYearly() {
    this.monthly = false;
  }
  ChangePlanMonthly() {
    this.monthly = true;
  }

  Arcade() {
    this.arcade = true;
    this.advanced = false;
    this.pro = false;
  }
  Advanced() {
    this.arcade = false;
    this.advanced = true;
    this.pro = false;
  }
  Pro() {
    this.arcade = false;
    this.advanced = false;
    this.pro = true;
  }

  goStep2() {
    this.total = 0;
    this.step = 2;
  }
  goStep3() {
    if (!this.arcade && !this.advanced && !this.pro) return;
    this.step = 3;
  }
  goStep4() {
    if (this.monthly) {
      if (this.arcade) this.total += 9;
      if (this.advanced) this.total += 12;
      if (this.pro) this.total += 15;
      if (this.checkedOnline) this.total += 1;
      if (this.checkedStorage) this.total += 2;
      if (this.checkedProfile) this.total += 2;
    } else {
      if (this.arcade) this.total += 90;
      if (this.advanced) this.total += 120;
      if (this.pro) this.total += 150;
      if (this.checkedOnline) this.total += 10;
      if (this.checkedStorage) this.total += 20;
      if (this.checkedProfile) this.total += 20;
    }
    this.step = 4;
  }
  goBackStep3() {
    this.step = 3;
  }
  goBackStep2() {
    this.step = 2;
  }
  goBackStep1() {
    this.step = 1;
  }
  ConfirmAll() {
    this.step = 5;
  }
}
