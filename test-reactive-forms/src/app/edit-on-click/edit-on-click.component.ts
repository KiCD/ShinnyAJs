import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-on-click',
  templateUrl: './edit-on-click.component.html',
  styleUrls: ['./edit-on-click.component.css']
})
export class EditOnClickComponent implements OnInit {
  @Input() initialValue:string;
  @Input() inputFormGroup: FormGroup;
  @Input() inputFormControl : FormControl;
  textToEdit:string;
  private editMode:boolean;
  constructor() { }

  ngOnInit() {
    this.textToEdit = this.initialValue;
    console.log("input val is: ",this.textToEdit);
  }

  editModeOn():boolean{
    return this.editMode;
  }
 
  enableEditMode()
  {
    this.editMode = true;
  }

  saveValue()
  {
    this.textToEdit = this.inputFormControl.value;
    if(this.textToEdit === this.initialValue){
      this.inputFormControl.reset(this.textToEdit);
    }

    this.editMode = false;
  }

  cancelSave()
  {
    if(this.textToEdit === this.initialValue){
      this.inputFormControl.reset(this.initialValue);
    }
    else{
      this.inputFormControl.setValue(this.textToEdit);
    }
    this.editMode = false;
  }
}
