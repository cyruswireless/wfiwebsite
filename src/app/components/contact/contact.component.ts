import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  recordForm!: FormGroup;
  alert?: boolean = false;

  Record = {
    name: '',
    enterprise: '',
    email: '',
    subject: ''
  };

  constructor(
    private http: HttpClient,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.recordForm = new FormGroup({
      'name': new FormControl(this.Record.name, [Validators.required, Validators.minLength(8), Validators.maxLength(100)]),
      'enterprise': new FormControl(this.Record.enterprise, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      'email': new FormControl(this.Record.email, [Validators.required, Validators.maxLength(50), Validators.pattern("[^ @]*@[^ @]*")]),
      'subject': new FormControl(this.Record.subject, [Validators.required, Validators.minLength(10), Validators.maxLength(600)])
    });
  }

  get name() { return this.recordForm.get('name'); }
  get enterprise() { return this.recordForm.get('enterprise'); }
  get email() { return this.recordForm.get('email'); }
  get subject() { return this.recordForm.get('subject'); }

  sendRecord() {
    this.contactService.saveRecord({
      name: this.recordForm.value.name,
      enterprise: this.recordForm.value.enterprise,
      email: this.recordForm.value.email,
      subject: this.recordForm.value.subject
    }).subscribe(
      (res:any) => {
        if(res.status == 1) {
          this.alert = true;
          this.recordForm.reset();
        }
      }
    );
  }

  closeAlert () {
    this.alert = false;
  }
}
