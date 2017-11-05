import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

function emailOrPhoneAreProvided(c: AbstractControl)
{
  let emailControl = c.get('email');
  let phoneControl = c.get('phone');
  if(!emailControl.value && !phoneControl.value)
    return {'atLeastOne':true};
  return null;
}

@Component({
  selector: 'app-reactive-form-with-validation',
  templateUrl: './reactive-form-with-validation.component.html',
  styleUrls: ['./reactive-form-with-validation.component.css']
})
export class ReactiveFormWithValidationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  testForm: FormGroup;
  someVal=true;
  ngOnInit() {
    this.initForm();
  }
  
  initForm()
  {
    this.testForm = this.formBuilder.group({
      name:['', Validators.required],
      contactMethod:this.formBuilder.group({
        email: '',
        phone: ''
      },{validator:emailOrPhoneAreProvided})
    })
  }
}
