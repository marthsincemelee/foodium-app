import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userService.loginForm = this.fb.group({
      username: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required]
    })
  }

}
