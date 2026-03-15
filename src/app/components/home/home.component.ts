import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Output() scrollToSection = new EventEmitter<string>();
  @Output() downloadResume = new EventEmitter<any>();

  onNavClick(sectionName: string) {
    this.scrollToSection.emit(sectionName);
  }

  onDownloadResume() {
    this.downloadResume.emit();
  }
}
