import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class ContatoModule {}
