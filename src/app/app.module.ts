import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContactComponent } from './contact/contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {ContactService} from './services/contact.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent
  ],
  entryComponents: [ContactComponent],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ContactComponent, ContactService],
  bootstrap: [ContactListComponent]
})
export class AppModule { }
