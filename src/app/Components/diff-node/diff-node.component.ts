import { Component, Input } from '@angular/core';
import { DiffNode } from '../../shared/diff.service';
import { ResponseComparerComponent } from '../responseComparer/response-comparer/response-comparer.component';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-diff-node',
  standalone: true,
  imports: [CommonModule, DiffNodeComponent],
  templateUrl: './diff-node.component.html',
  styleUrl: './diff-node.component.css',
})
export class DiffNodeComponent {
  @Input() diff: DiffNode[] | undefined = [];

  getColor(status: string): string {
    switch (status) {
      case 'added':
        return 'green';
      case 'removed':
        return 'red';
      case 'changed':
        return 'orange';
      case 'nested':
        return 'black';
      default:
        return 'gray';
    }
  }
}
