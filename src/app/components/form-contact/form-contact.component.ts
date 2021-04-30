import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted: boolean;
  // private validEmailPattern = /^[A-Z|.|_|-]+[@]+[A-Z]+.com$/i;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      lastName: ['', [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      phoneNumber: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      zipCode: ['', [Validators.minLength(3), Validators.maxLength(4), Validators.required]],
    });
  }

  getError(field: string) {
    if (this.contactForm) {      
      return this.contactForm.controls[field].errors;
    }
  }

  contactSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    

    if (!this.contactForm.invalid) {
      console.log(this.contactForm.value);      
    }
  }

}
