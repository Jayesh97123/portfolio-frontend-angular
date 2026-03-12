import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: {
    name: string;
    iconClass: string;
  }[] = [
    {
      name: 'Git',
      iconClass: 'bi bi-git',
    },
    {
      name: 'JavaScript',
      iconClass: 'bi bi-javascript',
    },
    {
      name: 'Typescript',
      iconClass: 'bi bi-typescript',
    },
    {
      name: 'Angular',
      iconClass: 'fa-brands fa-angular',
    },
    {
      name: 'SCSS',
      iconClass: 'fa-brands fa-sass',
    },
    {
      name: 'CSS',
      iconClass: 'fa-brands fa-css',
    },
  ];
}
