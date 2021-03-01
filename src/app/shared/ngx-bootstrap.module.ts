import {NgModule} from "@angular/core";
import { ButtonsModule } from 'ngx-bootstrap/buttons';

const modules = [ButtonsModule]

@NgModule({
  imports: modules,
  exports: [...modules]
})
export class NgxBootstrapModule {
}
