import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component'; // ajuste o caminho se necessário

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidenavComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // corrigido: styleUrls (com "s")
})
export class DashboardComponent implements OnInit {

  token: string | null = null;

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log("Token:", this.token);
  }

}
