import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContactComponent} from '../contact/contact.component';
import {ContactService} from '../services/contact.service';
import {Contact} from '../model/contact';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  contacts: Array<Contact>;

  ngOnInit() {
   this.reloadData();
  }

  reloadData() {
    this.contactService.getContactList().subscribe(
      contacts => {
        this.contacts = contacts;
      }
    );
  }
  constructor(private modalService: NgbModal, private contactService: ContactService) {
    this.contactService.getRefreshedContactList().subscribe(
      contact => {
           this.contacts.push(contact);
      }
    );
  }

  add() {
    this.modalService.open(ContactComponent);
  }

  edit(contact: Contact) {
    const modal = this.modalService.open(ContactComponent);
    modal.componentInstance.contact = contact;
  }

  delete(contact: Contact) {
    this.contactService.deleteContact(contact).subscribe(
      result => {
        this.reloadData();
      }
    );
  }

}

