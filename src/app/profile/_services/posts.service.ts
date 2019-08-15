import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticateService } from '../../userauth/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: AngularFireList<any[]>;
  result = [];
  // public userId: string= this.auth.currentUserId;
  constructor(private http: HttpClient, private db: AngularFireDatabase, public auth: AuthenticateService) {
  
    this.posts = db.list('Admin');
  }

  getPosts(): Observable<any[]> {
    return this.db.list('Admin')
      .snapshotChanges()
      .pipe(map(items => {
        return items.map(a => {
          const data = a.payload.val();
          const key = a.payload.key;
          return { key, data };
        });
      }));
  }

  getUsers(): Observable<any[]> {
    return this.db.list('Admin').valueChanges();
  }

  postData(postKey): Observable<any> {
    return this.db.object(`Admin/${postKey}`).valueChanges();
  }

  addPosts(data) {
    console.log(this.auth.currentUserId);
    return this.db.object(`Admin/${this.auth.currentUserId}` )
    .update(data);
  }

  editPosts(data, key) {
    return this.db.object('Admin/' + key)
      .update(data);
  }

  deletePost(key) {
    return this.db.list(`Admin/${key}/`).remove();
  }
}
