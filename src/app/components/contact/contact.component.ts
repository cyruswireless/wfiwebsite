import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  recordForm!: FormGroup;
  onsuccess?: boolean = false;

  Record = {
    name: '',
    enterprise: '',
    email: '',
    subject: ''
  };

  @ViewChild('templateModal') templateModal?: TemplateRef<any>;

  constructor(
    private contactService: ContactService,
    private modalService: NgbModal,
    private config: NgbModalConfig
  ) { 
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }

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
    }).subscribe({
      next: (res: any) => {
        res.status == 1 ? this.typeResponse('success') : this.typeResponse('error');
      },
      error: (err: any) => {
        this.typeResponse('error');
      }
    });
  }

  typeResponse(type: string) {
    if(type == 'success') {
      this.onsuccess = true;
      this.recordForm.reset(); // RESET FORM
    } else if(type == 'error') {
      this.onsuccess = false;
    }

    // RESET CAPCHA VALIDATOR
    let captcha = document.getElementById('captchaValidator');
    if (captcha != null && captcha.style.display === 'none') {
      captcha.style.display = 'block';
    } else if (captcha != null && captcha.style.display === 'block') {
      captcha.style.display = 'none';
    }

    // RESET BUTTON SEND RECORD 
    let button = document.getElementById('buttonForm');
    if (button != null && button.style.display === 'none') {
      button.style.display = 'block';
    } else if (button != null && button.style.display === 'block') {
      button.style.display = 'none';
    }

    this.modalService.open(this.templateModal, { centered: true });
  }
}
