import { Component, } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-renderer',
  template: `
    <button 
      *ngIf="this.success === 0"
      type="button" (click)="onClick($event)">
      {{label}}
    </button>
    `,
})
export class RendererComponent implements ICellRendererAngularComp{
  
  params;
  label: string;
  success: number;

  agInit(params): void {
    this.params = params;
    this.success = this.params.value;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }
  

  constructor() { }

  ngOnInit() {
  }

}