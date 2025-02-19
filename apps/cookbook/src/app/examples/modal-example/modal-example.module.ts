import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KirbyModule } from '@kirbydesign/designsystem';
import { KirbyModalModule } from '@kirbydesign/designsystem/modal/v2';

import { ExamplesSharedModule } from '../examples.shared.module';

import { ModalCompactExampleComponent } from './compact-example/modal-compact-example.component';
import { EmbeddedModalExampleComponent } from './embedded-modal-example/embedded-modal-example.component';
import { ModalExampleConfigurationComponent } from './modal-example-configuration/modal-example-configuration.component';
import { ModalExampleSizeSelectorComponent } from './modal-example-configuration/modal-example-size-selector.component';
import { ModalExampleAdvancedComponent } from './modal-example-advanced.component';
import { ModalExampleSimpleComponent } from './modal-example-simple.component';
import { ModalExampleOutletComponent } from './modal-example-outlet.component';
import { ModalExampleComponent } from './modal-example.component';
import { ModalRoutePage1ExampleComponent } from './modal-route-example/modal-route-page1-example.component';
import { ModalRoutePage2ExampleComponent } from './modal-route-example/modal-route-page2-example.component';
import { ModalExampleAlertComponent } from './modal-example-alert.component';
import { ModalEmbeddedAlertExampleComponent } from './alert-example/modal-example-embedded-alert.component';

const COMPONENT_DECLARATIONS = [
  ModalExampleComponent,
  ModalExampleAdvancedComponent,
  ModalExampleSimpleComponent,
  ModalExampleConfigurationComponent,
  ModalExampleSizeSelectorComponent,
  ModalExampleOutletComponent,
  EmbeddedModalExampleComponent,
  ModalCompactExampleComponent,
  ModalRoutePage1ExampleComponent,
  ModalRoutePage2ExampleComponent,
  ModalExampleAlertComponent,
  ModalEmbeddedAlertExampleComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, KirbyModule, KirbyModalModule, ExamplesSharedModule],
  declarations: COMPONENT_DECLARATIONS,
  exports: COMPONENT_DECLARATIONS,
})
export class ModalExampleModule {}
