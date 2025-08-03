import { Component, Input } from '@angular/core';
import { DiffNode } from '../../shared/diff.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-side-by-side',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './side-by-side.component.html',
  styleUrl: './side-by-side.component.css',
})
export class SideBySideComponent {
  @Input() showHeader: boolean = true;

  @Input() diff: DiffNode[] = [];
  collapsed: Record<string, boolean> = {};

  toggle(key: string): void {
    this.collapsed[key] = !this.collapsed[key];
  }

  getColor(status: string): string {
    switch (status) {
      case 'added':
        return '#e6ffed'; // green
      case 'removed':
        return '#ffe6e6'; // red
      case 'changed':
        return '#fff5e6'; // orange
      case 'unchanged':
        return '#f9f9f9'; // gray
      default:
        return '#f0f0f0';
    }
  }

  getBorderColor(status: string): string {
    switch (status) {
      case 'added':
        return '#6cc070';
      case 'removed':
        return '#d9534f';
      case 'changed':
        return '#f0ad4e';
      default:
        return '#ccc';
    }
  }
}
