import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LawyersService {
  static firebase: any;

  private posts: AngularFireList<any []>;
  private posts1: AngularFireList<any []>;
  constructor( private firebase: AngularFireDatabase) {
    this.posts = firebase.list('Lawyers');
    this.posts1 = firebase.list('NewLawyers'); 
   }
  LawyersList: AngularFireList<any[]>;

  getLawyers(){
    this.LawyersList = this.firebase.list('Lawyers');
    return this.LawyersList.snapshotChanges();
  }

  getNewLawyers(){
    this.LawyersList = this.firebase.list('NewLawyers');
    return this.LawyersList.snapshotChanges();
  }

  deleteLawyer($key : string){
    this.LawyersList.remove($key);
  }

  confirmLawyer($key:string){
    LawyersService.postData($key).subscribe(
  );

    //this.LawyersList.remove($key);

  }

  addPosts(data,key) {
    this.posts.push(data);
    this.posts1.remove(key);
    
  }

  static postData(postKey): Observable<any> {
    return this.firebase.object(`Lawyers/${postKey}`).valueChanges();
  }
}
