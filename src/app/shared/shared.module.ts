import * as fromComponents from './components';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {NgxBootstrapModule} from "@shared/ngx-bootstrap.module";

const modules = [
  CommonModule,
  FormsModule,
  NgxBootstrapModule
]
const components = [...fromComponents.components]

@NgModule({
  imports: modules,
  declarations: components,
  exports: [...modules, ...components]
})
export class SharedModule {
}
