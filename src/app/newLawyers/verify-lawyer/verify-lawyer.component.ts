// import { Component, OnInit } from '@angular/core';
// import { AuthenticateService } from '../../userauth/authenticate.service';
// import { LawyersService } from '../../lawyers/lawyers.service';


// @Component({
//   selector: 'app-verify-lawyer',
//   templateUrl: './verify-lawyer.component.html',
//   styleUrls: ['./verify-lawyer.component.scss']
// })
// export class VerifyLawyerComponent implements OnInit {

//   constructor( public auth: AuthenticateService, private lawyersService: LawyersService ) { }
//   lawyerArray = [];
//   showDeleteMessage: boolean;
//   searchText: string ="";


//   ngOnInit() {
//     this.lawyersService.getNewLawyers().subscribe(
//       list => {
//         this.lawyerArray = list.map(item => {
//           return {
//             $key: item.key,
//             ...item.payload.val()
//           };
//         })
//       }
//     );
//   }
// onDelete($key) {
//    if (confirm('Are you sure to confirm this lawyer?')){
//      this.lawyersService.confirmLawyer($key);
//      this.showDeleteMessage= true;
//      setTimeout(() => this.showDeleteMessage = false, 3000);
//    }
// }

// filterCondition(Lawyers){
//   return Lawyers.first_name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;

// }




// }
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { LawyersService } from '../../lawyers/lawyers.service';
import { $ } from 'protractor';


@Component({
  selector: 'app-verify-lawyer',
  templateUrl: './verify-lawyer.component.html',
  styleUrls: ['./verify-lawyer.component.scss']
})
export class VerifyLawyerComponent implements OnInit {

  constructor( public auth: AuthenticateService, private lawyersService: LawyersService ) { }
  lawyerArray = [];
  showDeleteMessage: boolean;
  searchText: string ="";
  submitted: boolean;
  loading: boolean; 


  ngOnInit() {
    this.lawyersService.getNewLawyers().subscribe(
      list => {
        this.lawyerArray = list.map(item => {
          return {
            ...item.payload.val()
          };
        })
      }
    );
  }
onDelete($key) {
  //  if (confirm('Are you sure to confirm this lawyer?')){
  //    this.lawyersService.confirmLawyer($key);
  //    this.showDeleteMessage= true;
  //    setTimeout(() => this.showDeleteMessage = false, 3000);
  //  }
  this.lawyersService.getNewLawyers().subscribe(
    list => {
      this.lawyerArray = list.map(item => {
        return {
          ...item.payload.val()
        };
      })
    }
  );
  console.log(this.lawyerArray[0]);
  console.log($key);


//   this.submitted = true;

//     // if (this.lawyerArray.invalid) {
//     //   return;
//     // }

//     this.loading = true;
const data = this.lawyerArray[0];

console.log(data);
//       'case_type': this.lawyerArray,
//       'username': this.addForm.value.username,
//       'dob': this.addForm.value.dob,
//       'address': this.addForm.value.address,
//       'about': this.addForm.value.about,
//       'phoneno': this.addForm.value.phoneno,
//       'profileimage': this.imageURL ? this.imageURL : this.article['profileimage'],
//       'uid': this.auth.currentUserId,
//       'role': this.addForm.value.role,
//       'email': this.auth.currentUserName
//     };

//     if (this.posts.editPosts(data, this.auth.currentUserId)) {
//       this.router.navigate(['/viewprofile']);
//     }

//   

this.lawyersService.addPosts(data,$key);
console.log(data);
}

filterCondition(Lawyers){
  return Lawyers.first_name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;

}




}
