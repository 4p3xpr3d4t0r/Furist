import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor( private db: AngularFireDatabase) { }
  postData(postKey): Observable<any> {
    return this.db.object(`NewLawyers/${postKey}`).valueChanges();
  }
  editPosts(data, key) {
    return this.db.object('Lawyers/' + key)
      .update(data);
  }
}
