import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const EXPORT_COMPONENTS = [];

const PIPES = [];

const MODULES = [];

@NgModule({
  declarations: [...EXPORT_COMPONENTS, ...PIPES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...MODULES],
  exports: [...EXPORT_COMPONENTS, ...PIPES],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
