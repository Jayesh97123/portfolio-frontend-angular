import { Component } from '@angular/core';

@Component({
  selector: 'app-experiance',
  imports: [],
  templateUrl: './experiance.component.html',
  styleUrl: './experiance.component.scss',
})
export class ExperianceComponent {
  experiances: { title: string; description: string; duration: string }[] = [
    {
      title: 'EZO Technology Private Limited',
      description: `Century BOB (Body Opponent Bag): A popular, life-like mannequin with a vinyl "skin" for boxing and MMA, featuring seven height adjustments (60" to 78") and a sturdy, water- or sand-fillable base.
                    Body Opponent Dummy (165cm): A heavy-duty, 165cm tall training dummy made from shock-absorbing foam with a synthetic leather coating, designed for martial arts, boxing, and sparring.`,
      duration: 'Sept 2023 - Present',
    },
    {
      title: 'Rigved Technology Private Limited',
      description: `Responsible for developing and maintaining web applications using Angular and TypeScript.
                    Collaborated with cross-functional teams to deliver high-quality software solutions.`,
      duration: 'January 2022 - Oct 2023',
    },
    {
      title: 'Rigved Technology Private Limited',
      description: `Responsible for developing and maintaining web applications using Angular and TypeScript.
                    Collaborated with cross-functional teams to deliver high-quality software solutions.`,
      duration: 'January 2022 - Oct 2023',
    },
  ];
}
