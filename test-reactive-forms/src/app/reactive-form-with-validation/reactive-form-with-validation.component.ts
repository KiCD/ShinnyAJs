import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';

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
  nameGroup: FormGroup;
  nameFormControl: FormControl;
  someVal=true;
  name: string='Joe Smith';
  ngOnInit() {
    this.initForm();
  }
  
  initForm()
  {
    this.nameFormControl = new FormControl(this.name,Validators.required);
    this.nameGroup = this.formBuilder.group({name:this.nameFormControl});
    this.testForm = this.formBuilder.group({
      nameGroup: this.nameGroup,
      contactMethod:this.formBuilder.group({
        email: '',
        phone: '12345'
      },{validator:emailOrPhoneAreProvided})
    })
  }

  save()
  {
    console.log("save executed");
    console.log("form value: ",this.testForm.value);
  }
}
