import * as fromComponents from './components';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

const modules = [
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatIconModule
]
const components = [...fromComponents.components]

@NgModule({
  imports: modules,
  declarations: components,
  exports: [...modules, ...components]
})
export class SharedModule {
}
