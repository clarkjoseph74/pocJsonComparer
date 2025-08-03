import { Component, inject, Inject, Input } from '@angular/core';
import { DiffNode, JsonDiffService } from '../../../shared/diff.service';
import { DiffNodeComponent } from '../../diff-node/diff-node.component';

@Component({
  selector: 'app-response-comparer',
  standalone: true,
  imports: [DiffNodeComponent],
  templateUrl: './response-comparer.component.html',
  styleUrl: './response-comparer.component.css',
})
export class ResponseComparerComponent {
  jsonDiffService = inject(JsonDiffService);
  @Input() diff: DiffNode[] = [];

  ngOnInit(): void {
    const json1 = { name: 'Clark' };
    const json2 = { name: 'Clark Kent' };
    this.diff = this.jsonDiffService.compareJson(json1, json2);
    console.log(this.jsonDiffService);
  }
}
