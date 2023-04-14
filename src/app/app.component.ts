import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'msform';

  form: FormGroup;
  step = 2;
  monthly = true;

  arcade = false;
  advanced = false;
  pro = false;

  userData = {
    name: '',
    email: '',
    phone: '',
  }

  constructor(private formBuilder: FormBuilder)
  {
    this.form = formBuilder.group({
      name: [this.userData.name, Validators.required],
      email: [this.userData.email, [Validators.required, Validators.email]],
      phone: [this.userData.phone, [Validators.required]]  
    });
  }

  submitForm()
  {
    this.step = 2;
    console.log(this.form.value);
  }

  ChangePlanYearly()
  {
    this.monthly = false;
  }
  ChangePlanMonthly()
  {
    this.monthly = true;
  }

  Arcade()
  {
    this.arcade = true;
    this.advanced = false;
    this.pro = false;
  }
  Advanced()
  {
    this.arcade = false;
    this.advanced = true;
    this.pro = false;
  }
  Pro()
  {
    this.arcade = false;
    this.advanced = false;
    this.pro = true;
  }

  goStep2()
  {
    this.step = 2;
  }
  goStep3()
  {
    this.step = 3;
  }
  goStep4()
  {
    this.step = 4;
  }
  goBackStep3()
  {
    this.step = 3;
  }
  goBackStep2()
  {
    this.step = 2;
  }
  goBackStep1()
  {
    this.step = 1;
  }
  ConfirmAll()
  {

  }
}
