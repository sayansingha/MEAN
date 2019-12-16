import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:Http) { }

  //read contacts
  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts')
      .pipe(map(res => res.json()))
  }
  //add contact method
  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/api/addcontact',newContact,{headers:headers})
      .pipe(map(res => res.json()))
  }
  //delete method
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/delete/'+id)
      .pipe(map(res =>res.json()));
  }
}
