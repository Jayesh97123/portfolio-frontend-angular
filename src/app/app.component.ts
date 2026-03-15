import { Component } from '@angular/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ExperianceComponent } from './components/experiance/experiance.component';
import { HomeComponent } from './components/home/home.component';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-root',
  imports: [
    AboutMeComponent,
    SkillsComponent,
    // ProjectsComponent,
    ContactMeComponent,
    ExperianceComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-portfolio';

  scrollToSection(sectionName: string) {
    let element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadResume() {
    const hideNavigationContent = document.getElementById('navigation-bar');

    if (hideNavigationContent) {
      hideNavigationContent.style.display = 'none';
    }

    const hideContactMe = document.getElementById('contact-me');

    if (hideContactMe) {
      hideContactMe.style.display = 'none';
    }

    const element = document.getElementById('download-resume-content');

    if (element) {
      const options: any = {
        margin: 10,
        filename: 'jayesh-saindane-resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 1 },
        jsPDF: {
          unit: 'px',
          format: [1851, element.offsetHeight - 375],
          orientation: 'portrait',
        },
      };

      html2pdf()
        .set(options)
        .from(element)
        .save()
        .then(() => {
          hideNavigationContent.style.display = 'block';
          hideContactMe.style.display = 'flex';
        });
    }
  }
}
