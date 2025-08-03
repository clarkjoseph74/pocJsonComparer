import { Injectable } from '@angular/core';

export interface DiffNode {
  key: string;
  oldValue?: any;
  newValue?: any;
  status: 'added' | 'removed' | 'changed' | 'unchanged' | 'nested' | 'array';
  children?: DiffNode[];
}

@Injectable({
  providedIn: 'root', // ✅ This makes the service globally available
})
export class JsonDiffService {
  compareJson(obj1: any, obj2: any): DiffNode[] {
    const allKeys = new Set([
      ...Object.keys(obj1 || {}),
      ...Object.keys(obj2 || {}),
    ]);
    const diff: DiffNode[] = [];

    allKeys.forEach((key) => {
      const val1 = obj1 ? obj1[key] : undefined;
      const val2 = obj2 ? obj2[key] : undefined;

      if (val1 !== undefined && val2 === undefined) {
        diff.push({ key, oldValue: val1, status: 'removed' });
      } else if (val1 === undefined && val2 !== undefined) {
        diff.push({ key, newValue: val2, status: 'added' });
      } else if (this.isArrayOfObjects(val1) && this.isArrayOfObjects(val2)) {
        const children = this.compareArrays(val1, val2);
        diff.push({ key, status: 'array', children });
      } else if (this.isObject(val1) && this.isObject(val2)) {
        const children = this.compareJson(val1, val2);
        diff.push({ key, status: 'nested', children });
      } else if (val1 !== val2) {
        diff.push({ key, oldValue: val1, newValue: val2, status: 'changed' });
      } else {
        diff.push({ key, oldValue: val1, newValue: val2, status: 'unchanged' });
      }
    });

    return diff;
  }
  private compareArrays(arr1: any[], arr2: any[]): DiffNode[] {
    const diff: DiffNode[] = [];

    const maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
      const item1 = arr1[i];
      const item2 = arr2[i];

      if (item1 !== undefined && item2 !== undefined) {
        if (this.isObject(item1) && this.isObject(item2)) {
          const children = this.compareJson(item1, item2);
          const isChanged = children.some(
            (child) => child.status !== 'unchanged'
          );

          diff.push({
            key: `[${i}]`,
            status: isChanged ? 'changed' : 'unchanged',
            oldValue: item1,
            newValue: item2,
            children: isChanged ? children : [],
          });
        } else if (item1 !== item2) {
          diff.push({
            key: `[${i}]`,
            status: 'changed',
            oldValue: item1,
            newValue: item2,
          });
        } else {
          diff.push({
            key: `[${i}]`,
            status: 'unchanged',
            oldValue: item1,
            newValue: item2,
          });
        }
      } else if (item1 !== undefined) {
        diff.push({
          key: `[${i}]`,
          status: 'removed',
          oldValue: item1,
        });
      } else if (item2 !== undefined) {
        diff.push({
          key: `[${i}]`,
          status: 'added',
          newValue: item2,
        });
      }
    }

    return diff;
  }

  private isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  private isArrayOfObjects(value: any): boolean {
    return (
      Array.isArray(value) && value.every((item) => typeof item === 'object')
    );
  }

  private shallowEqual(obj1: any, obj2: any): boolean {
    if (!obj1 || !obj2) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    return keys1.every((key) => obj1[key] === obj2[key]);
  }
}
