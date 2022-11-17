import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import {MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

const EXPORT_COMPONENTS = [HeaderComponent, NavComponent, FooterComponent]

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule, MatButtonToggleModule, MatIconModule, MatToolbarModule],
  declarations: [...EXPORT_COMPONENTS],
  exports: [...EXPORT_COMPONENTS],
  providers: [],
})
export class LayoutModule {
  // To guard against a lazy loaded module re-importing GreetingModule, add the following GreetingModule constructor.
  // show this https://angular.io/guide/singleton-services
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: LayoutModule
  ) {
    if (parentModule) {
      throw new Error('LayoutModule is already loaded. Import it in the AppModule only.');
    }
  }
}
