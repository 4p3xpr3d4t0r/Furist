import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { ConfirmService } from './confirm.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-lawyer',
  templateUrl: './confirm-lawyer.component.html',
  styleUrls: ['./confirm-lawyer.component.scss']
})
export class ConfirmLawyerComponent implements OnInit {
  public map: any = { lat: 7.7707932959502235, lon: 80.67796250851325 };

  editForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: any;
  imageURL: Observable<any>;
  fileUploaded = false;
  upldStatus = '';
  key: String;
  article: Object;
  constructor(private storage: AngularFireStorage, private formBuilder: FormBuilder, private route: ActivatedRoute,
    public auth: AuthenticateService, private router: Router, private posts: ConfirmService) {
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group(
      {
        'case_type': [''],
        'district': [''],
        'email': [''],
      }
    );

    this.key = this.route.snapshot.paramMap.get('id');
    this.posts.postData(this.key).subscribe(data => {
        this.article = data;
        this.editForm.controls['case_type'].setValue(data.fullname);
        this.editForm.controls['district'].setValue(data.username);
        this.editForm.controls['email'].setValue(data.dob);
    });

    this.checkAuth();
  }

  checkAuth() {
    if (!this.auth.isUserLoggedIn) {
      this.router.navigate(['/auth']);
    }
  }
  get f() { return this.editForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    this.loading = true;

    const dt = new Date();
    const data = {

      'case_type': this.editForm.value.fullname,
      'district': this.editForm.value.username,
      'email': this.editForm.value.dob,
    };

    if (this.posts.editPosts(data, this.key)) {
      this.router.navigate(['/cofirmLawyers']);
    }

  }
  logout() {
    this.auth.logout();
  }
}
