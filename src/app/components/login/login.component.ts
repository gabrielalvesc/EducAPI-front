import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  loginForm!: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  protected initLoginForm(): void {
    if (this.userService.isLogged()) {
      this.navigateToHome();
    }
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(undefined, [Validators.required]),
      password: this.formBuilder.control(undefined, [Validators.required])
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value)
    if (this.loginForm) {
      this.login(this.loginForm.value.email, this.loginForm.value.password);
    }
  }

  protected login(email: string, senha: string): void {
    this.loading = !this.loading;
    this.userService.login(email, senha).subscribe((result: any) => {
      this.userService.saveToken(result.token);
      this.loading = !this.loading;
      this.navigateToHome();
    }, (error: any) => {
      this.loading = !this.loading;
    });
  }

  protected navigateToHome(): void {
    this.router.navigate(['/']);
  }

}
