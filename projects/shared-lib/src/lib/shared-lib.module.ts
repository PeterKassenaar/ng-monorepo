import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedLibComponent} from './shared-lib.component';
import {TestComponent} from './test/test.component';
import {UserService} from './shared/services/user.service';

@NgModule({
  declarations: [SharedLibComponent, TestComponent],
  imports: [],
  exports: [SharedLibComponent, TestComponent]
})
export class SharedLibModule {
  // Make sure this is a Singleton, i.e.
  // Prevent this module from being loaded twice
  constructor(@Optional() @SkipSelf() parentModule?: SharedLibModule) {
    if (parentModule) {
      throw new Error('Shared Library is already loaded. Import it in AppModule only');
    }
  }

  // Use the .forRoot() static method to make sure our UserService is a singleton
  static forRoot(configName?: string): ModuleWithProviders {
    // 0. We can configure our UserService, by passing in a 'configName' string.
    // Of course this can be of any type.

    // 1. To see if our service can access the name to configure, we log it to the console.
    console.log({configName});
    return {
      ngModule: SharedLibModule,
      // 2. Now we add the configuration as an Injection Token to be used/injected in the UserService.
      providers: [UserService, {provide: 'configName', useValue: configName}]
    };
  }
}
