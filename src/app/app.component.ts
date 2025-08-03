import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ResponseComparerComponent } from './Components/responseComparer/response-comparer/response-comparer.component';
import { JsonDiffService } from './shared/diff.service';
import { DiffNodeComponent } from './Components/diff-node/diff-node.component';
import { SideBySideComponent } from './Components/side-by-side/side-by-side.component';
import { JsonPlainViewComponent } from './Components/json-plain-view/json-plain-view.component';
import { CompareTapsComponent } from './Components/compare-taps/compare-taps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DiffNodeComponent,
    ResponseComparerComponent,
    SideBySideComponent,
    JsonPlainViewComponent,
    CompareTapsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pocJsonComparer';
  jsonDiffService = inject(JsonDiffService);

  json1 = {
    name: 'Clark',
    skills: [{ type: 'backend', value: 'C#' }],
    location: 'Metropolis',
    age: 30,
  };

  json2 = {
    name: 'Clark Kent',
    skills: [
      { type: 'backend', value: '.NET' },
      { type: 'mobile', value: 'Flutter' },
    ],
    country: 'Egypt',
    age: 30,
  };

  diff = this.jsonDiffService.compareJson(this.json1, this.json2);
}
