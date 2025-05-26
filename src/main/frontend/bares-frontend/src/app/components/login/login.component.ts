import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 necessário para ngModel e ngForm
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AppLoadingComponent } from '../../components/app-loading/app-loading.component';



@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    AppLoadingComponent
  ]
})
export class LoginComponent {
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  onSubmit(form: any): void {
    this.isLoading = true;

    this.authService.login({
      username: form.value.username,
      password: form.value.password
    }).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response));
        console.log("Token:", response.token);
        this.router.navigate(['/home']);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro no login', err);
        this.isLoading = false;
      }
    });
  }
}
