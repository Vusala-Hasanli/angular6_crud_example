import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/contact';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ContactService {
  url = 'http://localhost:8080/api/contacts';
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {
  }
  getContactList(): Observable<any> {
    return this.http.get(this.url);
  }

  saveContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url, contact);
  }

  refreshContactListTable(contact: Contact) {
     this.subject.next(contact);
  }

  getRefreshedContactList(): Observable<Contact> {
      return this.subject.asObservable();
  }

  deleteContact(contact: Contact) {
    return this.http.post(this.url + '/delete', contact);
  }

}
