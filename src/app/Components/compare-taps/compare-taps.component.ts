import { Component, inject } from '@angular/core';
import { JsonDiffService } from '../../shared/diff.service';
import { SideBySideComponent } from '../side-by-side/side-by-side.component';
import { DiffNodeComponent } from '../diff-node/diff-node.component';
import { JsonPlainViewComponent } from '../json-plain-view/json-plain-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compare-taps',
  standalone: true,
  imports: [
    CommonModule,
    SideBySideComponent,
    DiffNodeComponent,
    JsonPlainViewComponent,
  ],
  templateUrl: './compare-taps.component.html',
  styleUrl: './compare-taps.component.css',
})
export class CompareTapsComponent {
  diffService = inject(JsonDiffService);
  selectedTab: 'tree' | 'side' | 'plain' = 'tree';

  json1 = {
    id: 101,
    name: 'Clark Kent',
    age: 35,
    location: {
      city: 'Metropolis',
      country: 'USA',
    },
    skills: [
      { type: 'backend', value: 'C#' },
      { type: 'frontend', value: 'Angular' },
      { type: 'mobile', value: 'Xamarin' },
    ],
    certifications: ['Azure Developer', 'Scrum Master'],
    isAvailable: true,
    profile: {
      linkedin: 'https://linkedin.com/in/clarkkent',
      github: 'https://github.com/clark',
    },
    experience: [
      {
        company: 'Daily Planet',
        role: 'Reporter',
        years: 5,
      },
    ],
  };

  json2 = {
    id: 101,
    name: 'Clark J. Kent',
    age: 36,
    location: {
      city: 'Metropolis',
      country: 'USA',
      timezone: 'EST',
    },
    skills: [
      { type: 'backend', value: '.NET' },
      { type: 'frontend', value: 'React' },
      { type: 'cloud', value: 'AWS' },
    ],
    certifications: ['AWS Certified Developer', 'Scrum Master'],
    isAvailable: false,
    profile: {
      linkedin: 'https://linkedin.com/in/clarkjkent',
      github: 'https://github.com/clarkjkent',
      portfolio: 'https://clark.dev',
    },
    experience: [
      {
        company: 'Daily Planet',
        role: 'Reporter',
        years: 5,
      },
      {
        company: 'Justice League',
        role: 'Strategic Lead',
        years: 2,
      },
    ],
  };

  diff = this.diffService.compareJson(this.json1, this.json2);
}
