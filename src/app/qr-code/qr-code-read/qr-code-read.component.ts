import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-qr-code-read',
  templateUrl: './qr-code-read.component.html',
  styleUrls: ['./qr-code-read.component.css']
})
export class QrCodeReadComponent implements OnInit {

  qrform: FormGroup;
  qrInput: string;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.qrform = this.fb.group({
      input: '',
    });
  }

  generateQR(formValue: FormGroup) {
    const data = (formValue.value);
    this.qrInput = data.input;
    console.log(this.qrInput);

  }
}
