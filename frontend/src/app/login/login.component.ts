import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../utility/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  disableSubmit = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let postData = {
      "username": this.loginForm.value.username,
      "password": this.loginForm.value.password
    };
    this.apiService.postApi('api/v1/login/login',postData).subscribe((data) => {     
      if (data['status'] == 'success') {
        this.router.navigate(['/patient']);
      }else{
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: data['message'],
        });
      }
    })

  }
}

