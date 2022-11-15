import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

const EXPORT_COMPONENTS = [HeaderComponent, NavComponent, FooterComponent]

@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  exports: [...EXPORT_COMPONENTS],
  imports: [CommonModule],
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
