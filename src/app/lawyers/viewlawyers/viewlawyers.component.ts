import { Component, OnInit } from '@angular/core';
import { LawyersService } from '../lawyers.service';
import { AuthenticateService } from '../../userauth/authenticate.service';

@Component({
  selector: 'app-viewlawyers',
  templateUrl: './viewlawyers.component.html',
  styleUrls: ['./viewlawyers.component.scss']
})
export class ViewlawyersComponent implements OnInit {

  constructor( public auth: AuthenticateService, private lawyersService: LawyersService ) { }
  lawyerArray = [];
  showDeleteMessage: boolean;
  searchText: string ="";


  ngOnInit() {
    this.lawyersService.getLawyers().subscribe(
      list => {
        this.lawyerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        })
      }
    );
  }
onDelete($key) {
   if (confirm('Are you sure to delete this lawyer?')){
     this.lawyersService.deleteLawyer($key);
     this.showDeleteMessage= true;
     setTimeout(() => this.showDeleteMessage = false, 3000);
   }
}

filterCondition(Lawyers){
  return Lawyers.first_name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;

}
logout() {
  this.auth.logout();
}
}
