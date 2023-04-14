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
  step = 1;

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
