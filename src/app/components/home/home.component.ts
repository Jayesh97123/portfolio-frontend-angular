import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Output() scrollToSection = new EventEmitter<string>();

  onNavClick(sectionName: string) {
    this.scrollToSection.emit(sectionName);
  }
}
