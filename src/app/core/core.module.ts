import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';



@NgModule({
  declarations: [],
  imports: [
    PublicModule,
    ProtectedModule
  ]
})
export class CoreModule {
     constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
      if (parentModule) {
        throw new Error(
          'CoreModule is already loaded. Import it in the AppModule only');
      }
    }
 }
