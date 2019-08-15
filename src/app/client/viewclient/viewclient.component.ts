import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { AuthenticateService } from '../../userauth/authenticate.service';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrls: ['./viewclient.component.scss']
})
export class ViewclientComponent implements OnInit {

  constructor( public auth: AuthenticateService, private clientService: ClientService ) { }
  clientArray = [];
  showDeleteMessage: boolean;
  searchText: string ="";


  ngOnInit() {
    this.clientService.getCustomers().subscribe(
      list => {
        this.clientArray = list.map(item => {
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
     this.clientService.deleteCustomers($key);
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
