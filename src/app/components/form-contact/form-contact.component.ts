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

  contactForm   : FormGroup;
  contactData   : Formspree;
  initialValues : Formspree;
  submitted     : boolean;
  visibleAlert  : boolean;

  constructor(private formBuilder: FormBuilder, private formSpreeService: FormspreeService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName   : ['', [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      lastName    : ['', [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      address     : ['', [Validators.minLength(5), Validators.maxLength(50), Validators.required]],
      phoneNumber : ['', [Validators.minLength(7), Validators.maxLength(10), Validators.required]],
      email       : ['', [Validators.email, Validators.required]],
      zipCode     : ['', [Validators.minLength(5), Validators.maxLength(9), Validators.required]],
    });
    this.initialValues = this.contactForm.value;
  }

  getError(field: string) {
    if (this.contactForm) {
      return this.contactForm.controls[field].errors;
    }
  }

  contactSubmit() {
    this.submitted = true;

    if (!this.contactForm.invalid) {
      this.contactData = this.contactForm.value;
      this.formSpreeService.sendFormSpree(
        'https://formspree.io/f/xleajbel',
        this.contactData
      ).subscribe(response => {
        if (response) {
          this.contactForm.reset(this.initialValues);
          this.submitted = false;
          this.visibleAlert = true;
        }
      });
    }
  }

}
