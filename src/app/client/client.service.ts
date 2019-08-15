import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private firebase: AngularFireDatabase) { }
  ClientsList: AngularFireList<any[]>;

  getCustomers(){
    this.ClientsList = this.firebase.list('Customers');
    return this.ClientsList.snapshotChanges();
  }

  deleteCustomers($key : string){
    this.ClientsList.remove($key);
  }
}
