import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.createFormGroup();
   }
   
   ngOnInit(): void {
  }

  createFormGroup(){
    return new FormGroup({
      email  :new FormControl('',[Validators.required,Validators.pattern(this.expresiones.email)]),
      password  :new FormControl('',[Validators.required,Validators.minLength(5)]),
      recordarUsuario: new FormControl(),
    })
  } 

  onLogIn(){
  }



  get emailInvalido(){return this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched }
  get passwordInvalido(){return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched }

}
