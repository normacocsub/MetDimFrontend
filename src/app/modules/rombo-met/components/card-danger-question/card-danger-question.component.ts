import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';


@Component({
  selector: 'app-card-danger-question',
  templateUrl: './card-danger-question.component.html',
  styleUrls: ['./card-danger-question.component.css']
})
export class CardDangerQuestionComponent implements OnInit {

  @Input() cardtitle = '';

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
  
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

}
