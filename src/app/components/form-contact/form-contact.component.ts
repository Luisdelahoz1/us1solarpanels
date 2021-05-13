import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formspree } from '../../interfaces/formspree/formspree';
import { FormspreeService } from '../../services/formspree/formspree.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  contactForm : FormGroup;
  contactData : Formspree;
  submitted   : boolean;
  // private validEmailPattern = /^[A-Z|.|_|-]+[@]+[A-Z]+.com$/i;

  constructor(private formBuilder: FormBuilder, private formSpreeService: FormspreeService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName   : ['', [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      lastName    : ['', [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      phoneNumber : ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      email       : ['', [Validators.email, Validators.required]],
      zipCode     : ['', [Validators.minLength(5), Validators.maxLength(9), Validators.required]],
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
      this.contactData = this.contactForm.value;
      this.formSpreeService.sendFormSpree(
        'https://formspree.io/f/xleajbel',
        this.contactData
      ).subscribe(response => {
        console.log(response);

        if (response) {
          this.contactForm.reset();
        }
      });
    }
  }

}
