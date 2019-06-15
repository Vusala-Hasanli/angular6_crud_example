import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ContactService} from '../services/contact.service';
import {Contact} from '../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact: Contact;
  public isEditable: boolean;
  public isValid: boolean;

  constructor(public activeModal: NgbActiveModal, private contactService: ContactService) {}

  ngOnInit() {
    this.isValid = true;
    if (this.contact == null) {
      this.contact = new Contact();
      this.isEditable = false;
    } else {
      this.isEditable = true;
    }
  }

  add() {
    this.validate()
    if (this.isValid) {
      this.contactService.saveContact(this.contact).subscribe(
        contact => {
          if (contact != null) {
            this.contactService.refreshContactListTable(contact);
            this.activeModal.close('Close click');
          } else {
            this.isValid = false;
          }
        }
      );
    }
  }

  edit() {
    this.contactService.saveContact(this.contact).subscribe(
      contact => {
        if (contact != null) {
          this.activeModal.close('Close');
        }
      }
    );
  }

  validate(): boolean {
    if (this.contact.name === '' || this.contact.surname === '' || this.contact.phoneNumber === '') {
       this.isValid = false;
    } else {
      this.isValid = true;
    }
    return this.isValid;
  }

  _keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
