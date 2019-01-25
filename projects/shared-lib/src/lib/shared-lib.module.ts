import {ModuleWithProviders, NgModule} from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { TestComponent } from './test/test.component';
import {UserService} from './shared/services/user.service';

@NgModule({
  declarations: [SharedLibComponent, TestComponent],
  imports: [
  ],
  exports: [SharedLibComponent, TestComponent]
})
export class SharedLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedLibModule,
      providers: [ UserService ]
    };
  }
}
