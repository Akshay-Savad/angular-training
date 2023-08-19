import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-reactive-demo2',
  templateUrl: './reactive-demo2.component.html',
  styleUrls: ['./reactive-demo2.component.css'],
})
export class ReactiveDemo2Component implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('[6789]{1}[0-9]{9}')]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
  get f() {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
