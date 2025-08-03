import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-plain-view',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './json-plain-view.component.html',
  styleUrl: './json-plain-view.component.css',
})
export class JsonPlainViewComponent {
  @Input() oldJson: any;
  @Input() newJson: any;
}
