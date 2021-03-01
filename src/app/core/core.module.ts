import {EnsureModuleLoadedOnceGuard} from "@core/ensure-module-loaded-once-guard";
import {NgModule, Optional, SkipSelf} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "@env";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {MockDataProvider} from "@core/mocks/mock-data-provider";

// export function ConfigLoader(configService: ConfigService) {
//   // Note: this factory need to return a function (that return a promise)
//   console.log('before load config');
//   return () => configService.load(environment.configFile);
// }

@NgModule({
  imports: [
    HttpClientModule,
    environment.production ?
      [] : HttpClientInMemoryWebApiModule.forRoot(
      MockDataProvider,
      {
        apiBase: 'api/v1/',
        host: 'http://localhost:8080',
        passThruUnknownUrl: true,
        dataEncapsulation: false
      }
      )

    // CommonModule,
    // CoreRoutingModule,
    // StoreModule.provideStore(reducer),
    // RouterStoreModule.connectRouter(),
    // StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // EffectsModule.runAfterBootstrap(CustomersEffects)
  ],
  declarations: [],
  providers: [
    // HttpService, ConfigService, CacheService,

    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: ConfigLoader,
    //   deps: [ConfigService],
    //   multi: true
    // },
    // CustomersDataService
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
