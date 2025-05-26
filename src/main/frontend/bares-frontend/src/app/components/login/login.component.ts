import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
      next: (response: any) => { // ou use AuthResponse se tiver
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
