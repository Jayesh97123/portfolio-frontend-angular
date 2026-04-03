import { Component } from '@angular/core';

@Component({
  selector: 'app-experiance',
  imports: [],
  templateUrl: './experiance.component.html',
  styleUrl: './experiance.component.scss',
})
export class ExperianceComponent {
  experiances: { title: string; descriptions: string[]; duration: string }[] = [
    {
      title: 'EZO Technology Private Limited',
      descriptions: [
        `Developed and enhanced dynamic and responsive web pages using Angular, TypeScript, HTML5, CSS3, JavaScript, and the Ionic Framework, ensuring high performance and a seamless user experience across multiple devices.`,
        `Diagnosed and resolved complex UI and functional bugs, improving application stability, performance, and maintainability.`,
        `Designed and implemented RESTful APIs using Express.js and Node.js to support data exchange between front-end and back-end systems, ensuring optimized performance and secure communication.`,
      ],
      duration: 'Sept 2023 - Present',
    },
    {
      title: 'Rigved Technology Private Limited',
      descriptions: [
        `I have experience working as a front-end developer consultant for Reliance Jio.`,
        `Resolved bugs, observations and developed new web pages as per the user story using Angular, HTML, CSS, JavaScript, Bootstrap, Kendo UI, and Typescript technology.`,
      ],
      duration: 'Jan 2022 - Oct 2023',
    },
    {
      title: 'Spring India - Quality Engineer',
      descriptions: [
        `Record keeping of rework and rejection report.`,
        `Quality check of all sheet metal and injection molding components. Responsible for keeping a 4M change record.`,
      ],
      duration: 'Oct 2020 - Apr 2021',
    },
  ];
}
