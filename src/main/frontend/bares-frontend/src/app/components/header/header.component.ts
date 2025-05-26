import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

// Importe os módulos Angular Material corretamente:
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Corrigido de "styleUrl"
})
export class HeaderComponent implements OnInit {
  username: string = "";

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.currentUsername.subscribe(name => {
      this.username = name;
    });

    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Adicionado seconds

    const timeButton = document.getElementById('timeButton');
    if (timeButton) {
      timeButton.textContent = `${hours}:${minutes}:${seconds}`; // Corrigido uso de template literal
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userService.clearUsername();
    this.router.navigate(['/login']);
  }
}
