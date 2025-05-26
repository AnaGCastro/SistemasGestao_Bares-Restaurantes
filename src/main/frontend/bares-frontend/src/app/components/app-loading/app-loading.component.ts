import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="isLoading" class="loading-spinner">Carregando...</div>`,
  styleUrls: ['./app-loading.component.css']
})
export class AppLoadingComponent {
  @Input() isLoading = false;
}
