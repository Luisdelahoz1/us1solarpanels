import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formspree } from '../../interfaces/formspree/formspree';

@Injectable({
  providedIn: 'root'
})
export class FormspreeService {

  constructor(private http: HttpClient) { }

  public sendFormSpree(url: string, contactData: Formspree) {
    return this.http.post(url, contactData);
  }
}
